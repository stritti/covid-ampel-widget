<template>
  <div id="home-view">
    <doc-head :meta-info="metaInfo" />

    <widget
      v-if="hasSelectedDistrict"
      :object-id="selected"
    />
    <div v-else>
      Bitte einen Landkreis in den
      <router-link to="/config">
        Einstellungen
      </router-link> auswählen.
    </div>
  </div>
</template>

<script>
import DocHead from '@/components/DocHead.vue'
import Widget from '@/components/Widget.vue'
import { rkiService } from '@/services/rki.service'

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
  data () {
    return {
      metaInfo: {
        title: 'Covid-19 Ampel',
        meta: {
          vmid: 'description',
          name: 'description',
          description: 'Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick.',
          image: null
        }
      },
      selected: null
    }
  },
  computed: {
    hasSelectedDistrict () {
      return (this.selected !== null)
    }
  },
  async mounted () {
    if (this.id) {
      this.selected = this.id
      this.persistDistrict()
    } else {
      this.selected = localStorage.getItem('landkreis')
    }

    if (this.selected) {
      this.routeToDistrictSpecificAmpelWidget()
      return
    }
    if (!('geolocation' in navigator)) {
      this.routeToConfigPage()
      return
    }
    await navigator.geolocation.getCurrentPosition(async (currentPositionOfUser) => {
      const districtName = await rkiService.getDistrictName(currentPositionOfUser.coords)
      if (!districtName) {
        this.routeToConfigPage()
      }
      const areas = await rkiService.getAreas()
      this.selected = areas.find(area => {
        if (!area) {
          return false
        }
        return area.attributes.GEN === districtName
      }
      ).attributes.OBJECTID
      this.persistDistrict()
      this.routeToDistrictSpecificAmpelWidget()
    }, () => {
      this.routeToConfigPage()
    })
  },
  methods: {
    persistDistrict () {
      localStorage.setItem('landkreis', this.selected)
    },
    routeToDistrictSpecificAmpelWidget () {
      this.$router.push('/lkr/' + this.selected)
    },
    routeToConfigPage () {
      this.$router.push('/config')
    }
  }
}
</script>
