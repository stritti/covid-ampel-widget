<template>
  <widget :objectId="selected" v-if="selected != null"/>
</template>

<script>
import Widget from '@/components/Widget.vue'

export default {
  name: 'Home',
  components: {
    Widget,
  },
  data() {
    return {
      selected: null
    }
  },
  created() {
    this.selected = localStorage.getItem('landkreis')
    console.log(this.selected)
    if(this.selected == null) {
      this.$router.push('/config')
    }
  }
}
</script>
