<template>
  <widget :objectId="selected" v-if="selected != null"/>
  <config v-else />
</template>

<script>
import Widget from '@/components/Widget.vue'
import Config from '@/components/Config.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Covid-19 Ampel-Widget',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick.',
      }
    ]
  },
  props: ['id'],
  components: {
    Widget, Config
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

    if(this.selected) {
      this.$router.push('/lkr/' + this.selected)
    }
  }
}
</script>
