<template>
  <div id="config">
    <p>
      Wählen sie bitte den gewünschten Landkreis aus:
    </p>
    <landkreise />
    <p>
      <router-link to="/"><button> OK </button></router-link>
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
