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
.container {
  // Browsers which partially support CSS Environment variables (iOS 11.0-11.2).
  @supports (padding-left: env(safe-area-inset-left)) {
    --safe-area-inset-left: env(safe-area-inset-left);
    padding-left: calc(var(--safe-area-inset-left));
  }
  // Browsers which fully support CSS Environment variables (iOS 11.2+).
  @supports (padding-left: constant(safe-area-inset-left)) {
    --safe-area-inset-left: constant(safe-area-inset-left);
    padding-left: calc(var(--safe-area-inset-left) );
  }
  // Browsers which partially support CSS Environment variables (iOS 11.0-11.2).
  @supports (padding-right: env(safe-area-inset-right)) {
    --safe-area-inset-right: env(safe-area-inset-right);
    padding-right: calc(var(--safe-area-inset-right));
  }
  // Browsers which fully support CSS Environment variables (iOS 11.2+).
  @supports (padding-right: constant(safe-area-inset-right)) {
    --safe-area-inset-right: constant(safe-area-inset-right);
    padding-right: calc(var(--safe-area-inset-right) );
  }
}
.van-nav-bar {
  // Browsers which partially support CSS Environment variables (iOS 11.0-11.2).
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    padding-bottom: calc(var(--safe-area-inset-bottom) + 8px);
  }
  // Browsers which fully support CSS Environment variables (iOS 11.2+).
  @supports (padding-bottom: constant(safe-area-inset-bottom)) {
    --safe-area-inset-bottom: constant(safe-area-inset-bottom);
    padding-bottom: calc(var(--safe-area-inset-bottom) + 8px);
  }

  // Browsers which partially support CSS Environment variables (iOS 11.0-11.2).
  @supports (padding-top: env(safe-area-inset-top)) {
    --safe-area-inset-top: env(safe-area-inset-top);
    padding-top: calc(var(--safe-area-inset-top));
  }
  // Browsers which fully support CSS Environment variables (iOS 11.2+).
  @supports (padding-top: constant(safe-area-inset-top)) {
    --safe-area-inset-top: constant(safe-area-inset-top);
    padding-top: calc(var(--safe-area-inset-top) );
  }
}
</style>
