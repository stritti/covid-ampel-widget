<template>
  <div id="view">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import update from './mixins/update'

export default {
  components: { NavigationBar },
  mixins: [update],
  mounted () {
    // refresh automatically
    if (this.updateExists) {
      this.refreshApp()
    }
  }
}
</script>

<style lang="scss">
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
