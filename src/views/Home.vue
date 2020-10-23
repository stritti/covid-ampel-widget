<template>
  <widget :objectId="selected" v-if="selected != null"/>
</template>

<script>
import Widget from '@/components/Widget.vue'

export default {
  name: 'Home',
  props: ['id'],
  components: {
    Widget,
  },
  data() {
    return {
      selected: null
    }
  },
  mounted() {
    if(this.id) {
      this.selected = this.id
      localStorage.setItem('landkreis', this.selected)
    } else {
      this.selected = localStorage.getItem('landkreis')
    }

    if(this.selected == null) {
      this.$router.push('/config')
    } else {
      this.$router.push('/lkr/' + this.selected)
    }
  }
}
</script>
