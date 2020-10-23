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
  mounted() {
    this.selected = localStorage.getItem('landkreis')
    if(this.selected == null) {
      this.$router.push('/config')
    } else {
      this.$router.push('/lkr/' + this.selected)
    }
  }
}
</script>
