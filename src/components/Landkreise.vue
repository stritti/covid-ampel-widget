<template>
  <div>
    <van-loading
      v-if="isLoading"
      size="24px"
      color="#1989fa"
      vertical
    >
      Lade Daten &hellip;
    </van-loading>
    <div
      v-if="error"
      class="error"
    >
      <van-icon name="warning-o" /> {{ error }}
    </div>
    <van-index-bar
      v-else
      class="landkreise"
    >
      <span
        v-for="item in data"
        :key="item.OBJECTID"
      >
        <van-index-anchor
          v-if="item.index"
          :index="item.label"
        />
        <van-cell
          v-else
          clickable
          is-link
          icon="location-o"
          :class="selectedClass(item.OBJECTID)"
          @click="onClick(item.OBJECTID)"
        >
          <template #title>
            <h4 class="custom-title">{{ item.GEN }}</h4>
            <p>{{ item.BEZ }}</p>
          </template>
          <incidence-label :object-id="item.OBJECTID" />
        </van-cell>
      </span>
    </van-index-bar>
  </div>
</template>
<script>
import { rkiService } from '@/services/rki.service.js'
import IncidenceLabel from '@/components/IncidenceLabel.vue'

export default {
  name: 'Landkreise',
  components: {
    IncidenceLabel
  },
  data () {
    return {
      isLoading: false,
      error: null,
      data: [],
      selectedValue: null
    }
  },
  mounted () {
    this.isLoading = true

    rkiService.getAreas()
      .then((result) => {
        this.data = []
        let index = null
        result.forEach(item => {
          if (item.attributes.GEN.charAt(0) !== index) {
            // add Item for alphabetical anchor
            index = item.attributes.GEN.charAt(0)
            this.data.push({ OBJECTID: index, index: true, label: index })
          }
          this.data.push(item.attributes)
        })
        this.selectedValue = localStorage.getItem('landkreis')
      })
      .catch((error) => {
        console.log(error)
        this.error = 'Fehler beim Laden der Daten vom RKI-Server'
      })
      .finally(() => {
        this.track()
        this.isLoading = false
      })
  },

  methods: {
    onClick (id) {
      localStorage.setItem('landkreis', id)
      this.trackSelection(id)
      this.$router.push(`/lkr/${id}`)
    },
    selectedClass (id) {
      if (this.selectedValue === id) {
        return 'van-cell--selected '
      } else {
        return ''
      }
    },
    trackSelection (id) {
      this.$gtag.event('api_request', {
        event_category: 'lkr_select',
        event_label: `${id}`
      })
    },
    track () {
      this.$gtag.event('api_request', {
        event_category: 'lkr_load',
        event_label: 'lkr_load'
      })
    }

  }
}
</script>
<style lang="scss">
.landkreise {
  .van-index-anchor {
    color: var(--text);
    background-color: var(--background-color-light);
  }

  .van-cell {
    color: var(--text);
    background-color: var(--background-color);

    h4 {
      margin-top: 0;
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
   .van-cell--selected {
    background-color: var(--background-color-light);
  }
  .van-cell__value--alone {
    color: var(--text);
  }
  .error {
    color: var(--red);
  }
}
</style>
