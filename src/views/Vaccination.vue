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
      <div class="chart-container">
        <vaccination />
      </div>

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
          href="https://www.impfterminübersicht.de/"
          target="_blank"
        >
          📅 Impftermin Übersicht
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import Vaccination from '@/components/vaccin/Vaccination.vue'

export default {
  name: 'PrivaceyView',
  components: { DocHead, Vaccination },
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
#vaccination-view
  min-height: 100%
  width: 100vw

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
