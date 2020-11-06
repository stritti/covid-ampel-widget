<template>
  <div id="help-view">
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
        Diese Web-App dienst zur schnellen und übersichtlichen Darstellung des aktuellen
        Covid-19 Inzidenz-Wertes in einem Landkreis (Fälle der letzten 7 Tage pro 100.000 Einwohner).
      </p>
      <p>
        Mittels Apps für Android und iOS lässt sich diese Ampel einfach z.B. auf den Homescreen
        des Smartphones bringen:
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
          <p><a href="https://github.com/stritti/covid-ampel-widget/wiki/Anleitung-Android">Anleitung Android</a></p>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import HelpIOS from '@/components/help/HelpIOS.vue'

export default {
  name: 'HelpView',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Hilfe'
  },
  components: { HelpIOS },
  data() {
    return {
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
