<template>
  <div id="map-view">
    <doc-head :meta-info="metaInfo" />
    <van-sticky>
      <van-nav-bar
        title="Übersicht Inzidenz Deutschland"
        sticky
      />
    </van-sticky>
    <div class="container">
      <incidence-map-chart />
    </div>
  </div>
</template>
<script>
import IncidenceMapChart from '../components/incidence/IncidenceMapChart.vue'

export default {
  components: { IncidenceMapChart }

}
</script>
