<template>
  <div id="config-view">
    <h3><router-link class="nav" to="/">◀</router-link> Einstellungen</h3>
    <config />
  </div>
</template>

<script>
import Config from '@/components/Config.vue'

export default {

  components: {
    Config
  }
}
</script>
