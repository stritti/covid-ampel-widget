<template>
  <div id="more-view">
    <van-sticky>
      <van-nav-bar title="Mehr" left-text="Zurück" left-arrow @click-left="onClickLeft" sticky/>
    </van-sticky>
    <van-cell-group>
      <van-cell title="Impressum" is-link to="/imprint" />
      <van-cell title="Datenschutz" is-link to="/privacy" />
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'MoreView',
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Mehr'
    },
    methods: {
      onClickLeft () {
        this.$router.push('/')
      }
    }
  }
</script>
