<template>
  <vaccination-chart
    v-if="isLoaded"
    :chart-data="chartData"
  />
  <table id="vaccination-table">
    <tr>
      <td>1. Impfung:</td>
      <td align="right">
        {{ firstVaccinationQuote }}%
      </td>
    </tr>
    <tr>
      <td>Vollschutz:</td>
      <td align="right">
        {{ secondVaccinationQuote }}%
      </td>
    </tr>
  </table>
  <div class="source">
    <em>
      <small>
        Quelle: <a href="https://api.corona-zahlen.org/">api.corona-zahlen.org</a>
      </small>
    </em>
  </div>
</template>

<script>
import { coronaZahlenService } from '@/services/corona-zahlen.service'
import VaccinationChart from './VaccinationChart.vue'

export default {
  name: 'Vaccination',
  components: { VaccinationChart },
  data () {
    return {
      isLoaded: false,
      data: {},
      meta: {}
    }
  },
  computed: {
    chartData () {
      return {
        labels: ['min. 1. Impfung', 'Vollschutz', `angestrebte Herdenimmunität (${this.herdImmunity}%)`],
        datasets: [
          {
            label: 'Herden Immunität',
            showLabel: true,
            backgroundColor: ['rgb(255, 243, 128)', '#41B883', '#fc0008', 'transparent'],
            data: [
              0, 0,
              this.herdImmunity,
              100 - this.herdImmunity]
          },
          {
            label: 'Vollschutz',
            backgroundColor: ['rgb(255, 243, 128)', '#41B883', '#fc0008', 'transparent'],
            data: [
              this.firstVaccinationQuote,
              0, 0,
              100 - this.firstVaccinationQuote]
          },
          {
            label: '1. Impfung',
            backgroundColor: ['rgb(255, 243, 128)', '#41B883', '#fc0008', 'transparent'],
            data: [
              0,
              this.secondVaccinationQuote,
              0,
              100 - this.secondVaccinationQuote]
          }
        ]
      }
    },
    firstVaccinationQuote () {
      if (this.data.quote) {
        return this.rounded(this.data.quote * 100)
      } else {
        return 0
      }
    },
    secondVaccinationQuote () {
      if (this.data.secondVaccination && this.data.secondVaccination.quote) {
        return this.rounded(this.data.secondVaccination.quote * 100)
      } else {
        return 0
      }
    },
    herdImmunity () {
      return 70
    },
    deltaHerdImmunity () {
      return this.herdImmunity - this.firstVaccinationQuote - this.secondVaccinationQuote
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.isLoaded = false

      coronaZahlenService.getVaccinations()
        .then(result => {
          this.data = result.data
          this.meta = result.meta
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten von api.corona-zahlen.org'
        })
        .finally(() => {
          this.isLoaded = true
        })
    },
    rounded (value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style lang="sass" scoped>
.chartjs-render-monitor
  overflow: hidden

#vaccination-table
  position: relative
  top: -200px
  font-size: 1rem
  margin-left: auto
  margin-right: auto

.source
  top: -25px
  position: relative
  margin-left: auto
  margin-right: auto
  text-align: center

</style>
