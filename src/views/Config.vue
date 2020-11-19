<template>
  <div id="config-view">
    <doc-head :meta-info="metaInfo" />

    <van-sticky>
      <van-nav-bar
        title="Einstellungen"
        left-text="Zurück"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div class="container">
      <config />
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import Config from '@/components/Config.vue'

export default {
  name: 'ConfigView',
  components: { DocHead, Config },
  data() {
    return {
      metaInfo: {
        title: 'Einstellungen | Covid-19 Ampel-Widget',
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>
