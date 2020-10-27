<template>
  <div id="config-view">
    <h3 class="title"><router-link class="button" to="/">&lt;</router-link> Einstellungen</h3>
    <config />
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
  }
}
</script>
