<template>
  <div id="fed-emergency-break">
    <a
      :href="coronavisUrl"
      target="_blank"
    >
      Bundesnotbremse?
    </a>
    <table v-if="isLoaded">
      <thead>
        <tr>
          <th>Datum</th>
          <th colspan="5">
            Level
          </th>
        </tr>
      </thead>
      <tr
        v-for="entry in data"
        :key="entry.timestamp"
      >
        <th v-text="timestamp(entry.timestamp)" />
        <td><span v-if="!entry.ebrake100 && !entry.ebrake150 && !entry.ebrake165">keine </span></td>
        <td><span v-if="entry.ebrake100 && !entry.ebrake150 && !entry.ebrake165">100 </span></td>
        <td><span v-if="entry.ebrake100 && entry.ebrake150 && !entry.ebrake165">150</span></td>
        <td><span v-if="entry.ebrake100 && entry.ebrake150 && entry.ebrake165">165</span></td>
        <td v-text="entry.holiday" />
      </tr>
    </table>
  </div>
</template>

<script>
import { coronavisService } from '@/services/coronavis.service.js'

const DATE_FORMAT = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

export default {

  name: 'FederalEmergencyBrake',
  props: {
    ags: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLoaded: false,
      data: []
    }
  },
  computed: {
    coronavisUrl () {
      return `https://coronavis.dbvis.de/de/ebrake?ids=${this.ags}&numPastDays=3&numFutureDays=3`
    }

  },
  mounted () {
    // this.getData()
  },
  methods: {
    getData () {
      this.isLoaded = false
      coronavisService.getFederalEmergencyBrake(this.ags)
        .then(result => {
          console.log(result)
          this.data = result.data
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten vom Coronavis-Server'
        })
        .finally(() => {
          this.isLoaded = true
        })
    },
    timestamp (value) {
      const date = new Date(value)
      return date.toLocaleString('de-DE', DATE_FORMAT)
    }
  }
}
</script>

<style lang="scss">
#fed-emergency-break {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: rgba(45, 45, 45, 0.2);
  border-radius: 5px;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;

  a {
    color: rgb(0,0,0);
  }
}
</style>
