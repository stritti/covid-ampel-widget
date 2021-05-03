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
      <div class="head">
        <p>
          Wählen sie bitte den gewünschten Landkreis aus:
        </p>
        <p>
          Diese Einstellung wird nur lokal im Browser gespeichert.
        </p>
        <landkreise />
      </div>
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import Landkreise from '@/components/Landkreise.vue'

export default {
  name: 'ConfigView',
  components: { DocHead, Landkreise },
  data () {
    return {
      metaInfo: {
        title: 'Einstellungen | Covid-19 Ampel'
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

<style lang="scss" scoped>
  .head {
    margin: 8px;
  }
</style>
