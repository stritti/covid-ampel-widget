<template>
  <div>
    <van-loading
      v-if="isLoading"
      size="24px"
      color="#1989fa"
      vertical
    >
      Lade Daten ...
    </van-loading>
    <van-index-bar class="landkreise">
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
          @click="onClick(item.OBJECTID)"
        >
          <h4>{{ item.GEN }}</h4>
          <p>{{ item.BEZ }}</p>
        </van-cell>
      </span>
    </van-index-bar>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Landkreise',
  data() {
    return {
      isLoading : false,
      data: [],
    }
  },
  created() {
    this.getData().then((data) => {
      this.data = []
      let index = null
      data.forEach(item => {
        if (item.attributes.GEN.charAt(0) !== index) {
          index = item.attributes.GEN.charAt(0)
          this.data.push({OBJECTID: index, index: true, label: index })
        }
        this.data.push(item.attributes)
      })
      this.selectedValue = localStorage.getItem('landkreis')
    })
  },

  methods: {
    async getData() {
      this.isLoading = true
      const url =
        'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson'
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
      }
      this.track()
      this.isLoading = false
      return result.data.features
    },
    onClick(id) {
      localStorage.setItem('landkreis', id)
      this.trackSelection(id)
      this.$router.push(`/lkr/${id}`)
    },
    trackSelection (id) {
      this.$gtag.event(`api_request`, {
        event_category : 'lkr_select',
        event_label : `${id}`
      })
    },
    track () {
      this.$gtag.event(`api_request`, {
        'event_category' : 'lkr_load',
        'event_label' : 'lkr_load'
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
  .van-cell__value--alone {
    color: var(--text);
  }
}
</style>
