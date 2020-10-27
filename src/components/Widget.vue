<template>
  <div class="widget">
    <div v-if="loading">Daten werden geladen ...</div>
    <div v-if="error">{{ this.error }}</div>
    <div
      :class="color(item.attributes.cases7_per_100k)"
      v-for="(item, index) in data"
      :key="item.attributes.OBJECTID"
      :name="index"
      :object-id="item.attributes.OBJECTID"
      >
      <h3>{{ item.attributes.BEZ }} {{ item.attributes.GEN }}</h3>
      <p class="cases">
        <img src="@/assets/coronaampel.png" class="ampel"/>
        {{ rounded(item.attributes.cases7_per_100k) }}
        </p>
      <div class="info">
        <small>
          Fälle der letzten 7 Tage pro 100.000 Einwohner
        </small>
        <br />
        <small>
          Aktualisiert: {{ item.attributes.last_update }},
          Datenquelle:
          <a :class="color(item.attributes.cases7_per_100k)"
            target="_blank"
            href="https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/">RKI</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Widget',
  props: {
    // comma separated List of objectIds.
    // See: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
    objectId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      error: false,
      data: null,
    }
  },
  created() {
    this.getData().then((data) => {
      this.data = data
      this.loaded = true
    })
  },
  methods: {
    async getData() {
      const url =
        'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in (' +
        this.objectId +
        ')&outFields=objectId,death_rate,cases,deaths,cases_per_100k,cases_per_population,last_update,cases7_per_100k,EWZ,BEZ,GEN&returnGeometry=false&f=json'
      const httpClient = axios.create({
        baseURL: url,
        timeout: 10000, // indicates, 10000ms ie. 10 second
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await httpClient.get()
      if (result.error) {
        console.error(result.error)
        this.error = 'Fehler beim Laden der Daten vom RKI-Server'
      } else {
        this.loading = false
      }
      return result.data.features
    },
    color(value) {
      let col = ""
      if (value < 35) {
        col = "widget-green"
      } else if (value >= 35 && value < 50) {
        col = "widget-yellow"
      } else if (value >= 50 && value < 100) {
        col = "widget-red"
      } else if (value >= 100) {
        col = "widget-darkred"
      }
      return col
    },
    rounded(value) {
      return Number(value.toFixed(1))
    }
  }
}
</script>

<style lang="css" scoped>
.widget {
  height: 100vh;
  text-align: center;
  padding: 0;
}
.widget-green {
  color: rgb(221, 221, 221);
  background-color: rgb(2, 156, 2);
}
.widget-yellow {
  color: rgba(45, 45, 45, 0.99);
  background: rgb(230, 200, 50);
}
.widget-red {
  color: rgb(240, 240, 240);
  background-color: rgb(235, 64, 52);
}
.widget-darkred {
  height: 100vh;
  color: rgb(255, 253, 253);
  background-image: linear-gradient(135deg, #fc0008 25%, #ff6200 25%, #ff6200 50%, #fc0008 50%, #fc0008 75%, #ff6200 75%, #ff6200 100%);
  background-size: 56.57px 56.57px;
}
.cases {
  font-size: 3em;
  font-weight: 700;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
}
.ampel {
  height: 2.8rem;
}
.info {
  line-height: 1.25em;
}
</style>
