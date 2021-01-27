<template>
  <div id="help-view">
    <doc-head :meta-info="metaInfo" />

    <van-sticky>
      <van-nav-bar
        title="Hilfe"
        left-text="Zurück"
        left-arrow
        sticky
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div class="container">
      <p>
        Diese Web-App dient zur schnellen und übersichtlichen Darstellung des
        aktuellen Covid-19 Inzidenz-Wertes in einem Landkreis (Fälle der letzten
        7 Tage pro 100.000 Einwohner).
      </p>
      <p>
        Mittels Apps für Android und iOS lässt sich diese Ampel einfach z.B. auf
        den Homescreen des Smartphones bringen:
      </p>

      <van-collapse
        v-model="activeName"
        accordion
      >
        <van-collapse-item
          title="Anleitung iOS"
          name="iOS"
        >
          <HelpIOS />
        </van-collapse-item>
        <van-collapse-item
          title="Anleitung Android"
          name="Android"
        >
          <HelpAndroid />
        </van-collapse-item>
        <van-collapse-item
          title="Nützliche Links"
          name="Links"
        >
          <div
            v-for="usefulLinkItem in usefulLinks"
            :key="usefulLinkItem.headline"
          >
            <p>
              {{ usefulLinkItem.headline }}
            </p>
            <van-list>
              <a
                v-for="link in usefulLinkItem.links"
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
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import DocHead from '@/components/DocHead.vue'
import HelpAndroid from '@/components/help/HelpAndroid.vue'
import HelpIOS from '@/components/help/HelpIOS.vue'

export default {
  name: 'HelpView',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Hilfe'
  },
  components: { DocHead, HelpAndroid, HelpIOS },
  data() {
    return {
      metaInfo: {
        title: 'Hilfe | Covid-19 Ampel-Widget',
      },
      activeName: '',
      usefulLinks: [
        {
          headline: "Einige nützliche Links in Bezug auf die Inzidenz in Deutschland:",
          links: [
            {
              title: "Robert Koch-institut: COVID-19-Dashboard",
              url: "https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"
            },
            {
              title: "DIVI-Intensivregister",
              url: "https://www.intensivregister.de/#/intensivregister"
            },
            {
              title: "CORONAVIS: Intensivbetten-Kapazitäten",
              url: "https://coronavis.dbvis.de/de/overview/map/bedcapacities"
            },
            {
              title: "COVID Risiko Deutschland nach Ländern und Kreisen",
              url: "https://pavelmayer.de/covid/risks/"
            }
          ]
        },
        {
          headline: "Weltweite Informationen:",
          links: [
            {
              title: "Weltweite Daten und Fakten rund um die Pandemie im Zeitverlauf",
              url: "https://ourworldindata.org/coronavirus"
            }
          ]
        }
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
.useful-link
  .van-cell__title
    color: var(--blue)
</style>
