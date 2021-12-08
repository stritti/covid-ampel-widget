<template>
  <div id="map-view">
    <doc-head :meta-info="metaInfo" />
    <van-sticky>
      <van-nav-bar
        title="Inzidenz-Karte"
        sticky
      />
    </van-sticky>
    <div class="container">
      <incidence-map-chart />
    </div>
  </div>
</template>
<script>
import DocHead from '@/components/DocHead.vue'
import IncidenceMapChart from '@/components/incidence/IncidenceMapChart.vue'

export default {
  components: { DocHead, IncidenceMapChart },
  data () {
    return {
      metaInfo: {
        title: 'Übersichtskarte mit den Inzidenzen',
        meta: {
          vmid: 'description',
          name: 'description',
          description: 'Covid-19 Ampel: Behalte den Inzidenzwert deines Landkreises im Blick.'
        }
      }
    }
  }
}
</script>
