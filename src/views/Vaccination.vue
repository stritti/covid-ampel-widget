<template>
  <div id="vaccination-view">
    <doc-head :meta-info="metaInfo" />

    <div class="container">
      <h3>Fortschritt: Deutschland</h3>
      <vaccination class="vaccinationProgress" />
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
      },
      links: [
        {
          title: '💉 116117 - Impftermin Service',
          url: 'https://www.impfterminservice.de/'
        },
        {
          title: 'Impfterminübersicht',
          url: 'https://www.impfterminübersicht.de/'
        },
        {
          title: 'Impfdashboard.de',
          url: 'https://impfdashboard.de/'
        }
      ]

    }
  }
}
</script>
<style lang="sass">
.vaccinationProgress
  background-color: #ebedf0
  padding: 10px
  border-radius: 5px
  width: 100%

.useful-link
  .van-cell__title
    color: var(--blue)
</style>
