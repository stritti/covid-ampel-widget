<template>
  <div id="config-view">
    <van-sticky>
      <van-nav-bar title="Einstellungen" left-text="Zurück" left-arrow @click-left="onClickLeft"/>
    </van-sticky>

    <div class="container">
      <config />
    </div>
  </div>
</template>

<script>
import Config from '@/components/Config.vue'

export default {
  name: 'ConfigView',
  metaInfo: {
    title: 'Einstellungen'
  },
  components: {
    Config
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>
