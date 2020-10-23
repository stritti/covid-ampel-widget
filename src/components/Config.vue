<template>
  <div id="config">
    <p>
      Wählen sie bitte den gewünschten Landkreis aus:
    </p>
    <p>
      <landkreise />
    </p>
    <p>
      <router-link class="button" to="/"> OK </router-link>
    </p>
    <p>
      Diese Einstellung wird nur lokal im Browser gespeichert.
    </p>
  </div>
</template>

<script>
import Landkreise from '@/components/Landkreise.vue'

export default {
  name: 'Config',
  components: {
    Landkreise
  }
}
</script>

