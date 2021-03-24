<template>
  <div id="view">
    <router-view />
    <navigation-bar />
    <van-dialog
      v-model="updateExists"
      title="Neue Version"
      confirm-button-text="OK"
      :confirm="refreshApp"
      message="App aktualisieren &hellip;"
    />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import update from './mixins/update'

export default {
  components: { NavigationBar },
  mixins: [update]
}
</script>

<style lang="scss">
#view {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.van-nav-bar {
  // Browsers which partially support CSS Environment variables (iOS 11.0-11.2).
  @supports (padding-top: env(safe-area-inset-top)) {
    --safe-area-inset-top: env(safe-area-inset-bottom);
    padding-top: calc(var(--safe-area-inset-top));
  }
  // Browsers which fully support CSS Environment variables (iOS 11.2+).
  @supports (padding-top: constant(safe-area-inset-top)) {
    --safe-area-inset-top: constant(safe-area-inset-top);
    padding-top: calc(var(--safe-area-inset-top) );
  }
}
</style>
