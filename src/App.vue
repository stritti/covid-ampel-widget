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
