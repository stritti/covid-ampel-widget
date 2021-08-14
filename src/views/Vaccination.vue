<template>
  <div id="vaccination-view">
    <doc-head :meta-info="metaInfo" />
    <van-sticky>
      <van-nav-bar
        title="Impfstatus Deutschland"
        sticky
      />
    </van-sticky>
    <div class="container">
      <vaccination-chart />
      <hr>
      <div class="vaccination-cta">
        <a
          href="https://www.impfterminservice.de/"
          target="_blank"
        >
          💉 116117 - Impftermin Service
        </a>
      </div>
      <div class="vaccination-cta">
        <a
          href="https://impf-statistik.de/"
          target="_blank"
        >
          📈 Impf-Statistik
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import VaccinationChart from '@/components/vaccin/VaccinationChart.vue'

export default {
  name: 'PrivaceyView',
  components: { DocHead, VaccinationChart },
  data () {
    return {
      metaInfo: {
        title: 'Impfstatus | Covid-19 Ampel'
      }
    }
  }
}
</script>
<style lang="sass">
.vaccination-cta
  position: relative
  margin-left: auto
  margin-right: auto
  padding: 0.5rem
  text-align: center
  cursor: pointer
  background-color: rgba(45, 45, 45, 0.2)
  border-radius: 5px
  line-height: 1.5rem

  a
    color: var(--blue)
</style>
