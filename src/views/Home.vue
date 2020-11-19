<template>
  <div id="home-view">
    <doc-head :meta-info="metaInfo" />

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
import DocHead from '@/components/DocHead.vue'
import Widget from '@/components/Widget.vue'

export default {
  name: 'Home',
  components: {
    Widget, DocHead
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
      metaInfo: {
      title: 'Covid-19 Ampel-Widget',
      meta: {
        vmid: 'description',
        name: 'description',
        description: 'Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick.',
      }
    },
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
