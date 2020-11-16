<template>
  <div id="home-view">
    <widget
      v-if="selected != null"
      :object-id="selected"
    />
    <div v-else>
      Bitte einen Landkreis in den Einstellungen auswählen.
    </div>
  </div>
</template>

<script>
import Widget from '@/components/Widget.vue'

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
  components: {
    Widget
  },
  props: {
    id: {
      type: String,
      required: false,
      default: null
    }
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
    } else {
      this.$router.push('/config')
    }
  }
}
</script>
