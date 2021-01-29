<template>
  <div id="view">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  components: { NavigationBar },
  data () {
    return {
      showIntro: false
    }
  }
}
</script>
