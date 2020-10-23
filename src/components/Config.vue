<template>
  <div id="config">
    <p>
      Wählen sie bitte den gewünschten Landkreis aus:
    </p>
    <p>
      <landkreise />
    </p>
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
<style scoped>
button {
  width: 120px;
  height: 1.8rem;
  margin: 0.8rem;
}
</style>
