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
