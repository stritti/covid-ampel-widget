<template>
  <div id="view">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  components: { NavigationBar }
}
</script>

<style lang="scss">
#view {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;

}
</style>
