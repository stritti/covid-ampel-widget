<template>
  <span class="inzidenz">
    <van-tag
      v-if="incidence"
      v-text="rounded(incidence)"
    />
  </span>
</template>

<script>
import { rkiService } from '@/services/rki.service.js'

export default {
  name: 'IncidenceLabel',
  props: {
    // See: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
    objectId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      error: false,
      incidence: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      rkiService.getIncidence(this.objectId)
        .then(data => {
          const attribute = data.features[0].attributes
          this.incidence = attribute.cases7_per_100k
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten vom RKI-Server'
        })
    },
    rounded (value) {
      return Number(value.toFixed(1))
    }
  }
}
</script>
