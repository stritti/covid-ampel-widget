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
          <p>Einige nützliche Links in Bezug auf die Inzidenz in Deutschland:</p>
          <van-list>
            <van-cell
              icon="bookmark"
              is-link
            >
              <template #title>
                <a
                  href="https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"
                  target="_blank"
                >
                  Robert Koch-institut: COVID-19-Dashboard
                </a>
              </template>
            </van-cell>
            <van-cell
              icon="bookmark"
              is-link
            >
              <template #title>
                <a
                  href="hhttps://www.intensivregister.de/#/intensivregister"
                  target="_blank"
                >
                  DIVI-Intensivregister
                </a>
              </template>
            </van-cell>
            <van-cell
              icon="bookmark"
              is-link
            >
              <template #title>
                <a
                  href="https://coronavis.dbvis.de/de/overview/map/bedcapacities"
                  target="_blank"
                >
                  CORONAVIS: Intensivbetten-Kapazitäten
                </a>
              </template>
            </van-cell>
            <van-cell
              icon="bookmark"
              is-link
            >
              <template #title>
                <a
                  href="https://pavelmayer.de/covid/risks/"
                  target="_blank"
                >
                  COVID Risiko Deutschland nach Ländern und Kreisen
                </a>
              </template>
            </van-cell>
          </van-list><p>Weltweite Informationen:</p>
          <van-list>
            <van-cell
              icon="bookmark"
              is-link
            >
              <template #title>
                <a
                  href="https://ourworldindata.org/coronavirus"
                  target="_blank"
                >
                  Weltweite Daten und Fakten rund um die Pandemie im Zeitverlauf
                </a>
              </template>
            </van-cell>
          </van-list>
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
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>
