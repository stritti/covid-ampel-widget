<template>
  <div id="vaccination-view">
    <doc-head :meta-info="metaInfo" />
    <van-sticky>
      <van-nav-bar
        title="Impfstatus"
        sticky
      />
    </van-sticky>
    <div class="container">
      <div class="chart-container">
        <vaccination class="vaccinationProgress" />
      </div>
      <em>Quelle: <a href="https://api.corona-zahlen.org/">api.corona-zahlen.org</a></em>
    </div>

    <van-list>
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        class="useful-link"
      >
        <van-cell
          icon="bookmark"
          is-link
          :title="link.title"
        />
      </a>
    </van-list>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import Vaccination from '@/components/Vaccination.vue'

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
.chart-container
  position: relative
  left: auto
  right: auto
  height: 33vh
  width:93vw
  margin-bottom: 33vh

  .vaccinationProgress
    background-color: #ebedf0
    padding: 10px
    border-radius: 5px

.useful-link
  .van-cell__title
    color: var(--blue)
</style>
