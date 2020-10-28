<template>
  <div>
    <form>
    <select class="select-lkr" v-model="selectedValue" @change="onChange($event)">
      <option  v-for="item in data" :key="item.attributes.OBJECTID" :value="item.attributes.OBJECTID">
        {{ item.attributes.GEN }} ({{ item.attributes.BEZ }})
        </option>
    </select>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Landkreise',
  data() {
    return {
      selectedValue : null,
      data: [],
    }
  },
  created() {
    this.getData().then((data) => {
      this.data = data
      this.selectedValue = localStorage.getItem('landkreis')
    })
  },

  methods: {
    async getData() {
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
      return result.data.features
    },
    onChange(event) {
      localStorage.setItem('landkreis', event.target.value)
      this.$router.go(0)
    }
  }
}
</script>
<style scoped>
.select-lkr {
  width: 90%;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
}
</style>
