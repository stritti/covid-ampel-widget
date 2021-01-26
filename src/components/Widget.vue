<template>
  <div class="widget">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="getData"
    >
      <div v-if="isLoading">
        Daten werden geladen &hellip;
      </div>
      <div
        v-if="error"
        class="error"
      >
        <van-icon name="warning-o" /> {{ error }}
      </div>
      <div
        v-if="data"
        :class="widgetClass(data.cases7_per_100k)"
        :object-id="data.OBJECTID"
      >
        <h3 class="ort">
          <span class="bez">{{ data.BEZ }}&nbsp;</span>
          <span class="bez-short">{{ getBezShort(data.IBZ) }}&nbsp;</span>
          <span class="name">{{ data.GEN }}</span>
        </h3>
        <p class="cases">
          <img
            alt="Corona-Ampel"
            src="@/assets/coronaampel.png"
            class="ampel"
          >
          {{ rounded(data.cases7_per_100k) }}
          <indicator-eq v-if="indicator === 0" />
          <indicator-inc v-if="indicator === +1" />
          <indicator-dec v-if="indicator === -1" />
        </p>
        <div class="info">
          <small>
            <span class="inzidenz-short">Inzidenz</span>
            <span class="inzidenz">
              Fälle der letzten 7 Tage pro 100.000 Einwohner
            </span>
          </small>
          <br>
          <small>
            <span class="time">
              <span class="label">Stand: </span>
              <span class="data">{{ formatDate(data.last_update) }}</span>
            </span>
            <span
              class="source"
            >,
              <span class="label">Datenquelle: </span>
              <span class="data">
                <a
                  :class="widgetClass(data.cases7_per_100k)"
                  target="_blank"
                  rel="noreferrer"
                  href="https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"
                >RKI</a>
              </span>
            </span>
          </small>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { rkiService } from '@/services/rki.service.js'
import { database } from '@/services/database.js'
import { crono } from 'vue-crono'
import IndicatorInc from '@/components/svg/IndicatorInc.vue'
import IndicatorDec from '@/components/svg/IndicatorDec.vue'
import IndicatorEq from '@/components/svg/IndicatorEq.vue'

export default {
  name: 'Widget',
  components: {
    IndicatorInc, IndicatorDec, IndicatorEq
  },
  mixins: [crono],
  props: {
    // See: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
    objectId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      error: false,
      data: null,
      indicator: null
    }
  },
  mounted () {
    this.getData()
  },
  cron: {
    time: 5 * 60000, // minutes
    method: 'getData'
  },
  methods: {
    getData () {
      this.isLoading = true

      rkiService.getIncidence( this.objectId )
        .then(data => {
          const incidence = data.features[0].attributes
          if (incidence) {
            this.data = incidence

            this.getIndicator(incidence)
            database.add(incidence)
          }
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten vom RKI-Server'
        })
        .finally(() => {
          this.isLoading = false
          this.track(this.data)
        })
    },
    widgetClass (value) {
      let col = ""
      if (value < 35) {
        col = "widget-green"
      } else if (value >= 35 && value < 50) {
        col = "widget-35"
      } else if (value >= 50 && value < 100) {
        col = "widget-50"
      } else if (value >= 100  && value < 200) {
        col = "widget-100"
      } else if (value >= 200 && value < 500) {
        col = "widget-200"
      } else if (value >= 500) {
        col = "widget-500"
      }
      return col
    },
    rounded (value) {
      return Number(value.toFixed(1))
    },
    formatDate (value) {
      let date = new Date(value)
      return date.toLocaleDateString("de-DE")
    },
    getIndicator (today) {
      database.getData(today.OBJECTID, -1)
        .then((yesterday) => {
          let result
          if(yesterday) {
            if (today.cases7_per_100k < yesterday.cases7_per_100k) {
              result = -1
            } else if (today.cases7_per_100k > yesterday.cases7_per_100k) {
              result = +1
            } else {
              result = 0
            }
          } else {
            result = null
          }
          this.indicator = result
        })
    },
    getBezShort (IBZ) {
      switch (IBZ) {
        case 40: // Kreisfreie Stadt
          return 'KS'
        case 41: // Stadtkreis
          return 'SK'
        case 42: // Kreis
        case 46: // Sonderverband offiziel Kreis
          return 'K'
        case 43: // Landkreis
        case 45: // Sonderverband offiziel Landkreis
          return 'LK'
        default:
          return 'BZ' // Bezirk
      }
    },
    track (data) {
      this.$gtag.event(`api_request`, {
        'event_category' : 'inzidenz_load',
        'event_label' : `${data.BEZ} ${data.GEN} (${data.OBJECTID})`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.widget {
  text-align: center;
  padding: 0;

  h3 {
    margin-top: 2px;
    margin-bottom: 0.5rem;
  }

  .widget-green {
    height: 100vh;
    color: rgba(45, 45, 45, 0.99);
    background-color: rgb(255, 243, 128);
  }
  .widget-35 {
    height: 100vh;
    color: rgba(45, 45, 45, 0.99);
    background: rgb(255, 181, 52);
  }
  .widget-50 {
    height: 100vh;
    color: rgb(240, 240, 240);
    background-color: #fc0008;
  }
  .widget-100 {
    height: 100vh;
    color: rgb(255, 253, 253);
    background-image: linear-gradient(
      135deg,
      #fc0008 25%,
      #ff6200 25%,
      #ff6200 50%,
      #fc0008 50%,
      #fc0008 75%,
      #ff6200 75%,
      #ff6200 100%
    );
    background-size: 56.57px 56.57px;
  }
  .widget-200 {
    height: 100vh;
    color: rgb(255, 253, 253);
    background-image: linear-gradient(
      135deg,
      #661313 40%,
      #fc0008 40%,
      #fc0008 50%,
      #661313 50%,
      #661313 90%,
      #fc0008 90%,
      #fc0008 100%
    );
    background-size: 35.36px 35.36px;
  }
  .widget-500 {
    height: 100vh;
    color: rgb(255, 253, 253);
    background-image: linear-gradient(
      135deg,
      rgb(221, 0, 133) 40%,
      #e2040bc7 40%,
      #e2040bc7 50%,
      rgb(221, 0, 133) 50%,
      rgb(221, 0, 133) 90%,
      #e2040bc7 90%,
      #e2040bc7 100%
    );
    background-size: 35.36px 35.36px;
  }
  .cases {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;

    .ampel {
      height: 2.75rem;
      vertical-align: middle;
    }

    .icon-tabler {
      stroke-width: 3.5;
    }
  }
  .info {
    line-height: 1.2rem;
  }
}

/* small square widgets on iOS */
@media only screen and (max-width: 200px) {
  .widget {
    .ort {
      font-size: 1.2rem;
      line-height: 1rem;
      line-break: none;
      text-align: left;

      .bez {
        display: none;
      }
      .bez-short {
        display: inline;
      }
    }
    .cases {
      padding-right: 0.5rem;
      font-size: 2em;
      text-align: right;
    }
    .info {
      line-height: 0.8rem;

      .inzidenz {
        display: none;
      }
      .inzidenz-short {
        display: inline;
      }
      .source {
        display: none;
      }
      .time > .label {
        display: none;
      }
    }
  }
}

/* full width widgets on iOS */
@media only screen and (min-width: 200px) and (max-width: 360px) {
  .widget {
    .ort {
      .bez {
        display: none;
      }
      .bez-short {
        display: inline;
      }
    }

    .cases {
      font-size: 2em;
      padding-right: 0.5rem;
      text-align: center;
    }

    .info {
      .inzidenz {
        display: none;
      }
      .inzidenz-short {
        display: inline;
      }
      .source {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 360px) {
  .widget {
    .ort {
      .bez {
        display: inline;
      }
      .bez-short {
        display: none;
      }
    }

    .cases {
      font-size: 3em;
      padding-right: 0.5rem;
      text-align: center;
    }

    .info {
      .inzidenz {
        display: inline;
      }
      .inzidenz-short {
        display: none;
      }
    }
  }
}
</style>
