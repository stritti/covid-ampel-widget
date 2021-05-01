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
</style>
