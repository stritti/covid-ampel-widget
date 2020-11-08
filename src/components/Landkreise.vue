<template>
  <div>
    <van-loading
      v-if="isLoading"
      size="24px"
      color="#1989fa"
      vertical
    >
      Lade ...
    </van-loading>
    <van-index-bar @select="onChange">
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
          :to="'/lkr/' + item.OBJECTID"
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
      this.isLoading = false
      return result.data.features
    },
    onChange(event) {
      localStorage.setItem('landkreis', event)
      this.$router.go(0)
    }
  }
}
</script>
<style lang="scss" scoped>
.van-cell {
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
