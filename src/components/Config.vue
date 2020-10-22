<template>
  <div id="config">
    <h3>Einstellungen</h3>
    <p>
      Wählen sie bitte den gewünschten Landkreis aus:
    </p>
    <landkreise />
    <div>
      <router-link to="/"><button>OK</button></router-link>
    </div>
  </div>
</template>

<script>
import Landkreise from '@/components/Landkreise.vue'

export default {
  name: 'Config',
  components: {
    Landkreise
  },
  methods: {
    ok () {
      console.log('okay ...')
    }
  }

}
</script>

<style>

</style>
