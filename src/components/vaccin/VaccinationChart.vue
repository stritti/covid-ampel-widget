<template>
  <vue-highcharts
    v-if="isLoaded"
    ref="chart"
    class="chart"
    type="chart"
    :options="chartData"
    :redraw-on-update="true"
    :one-to-one-update="false"
    :animate-on-update="true"
  />
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
import VueHighcharts from 'vue3-highcharts'
import HighCharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(HighCharts)

export default {
  name: 'VaccinationChart',
  components: { VueHighcharts },
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
        colors: ['#E24C00', '#E5BE01', '#41B883', '#00ff55'],
        chart: {
          type: 'column',
          backgroundColor: '#323233',
          inverted: true,
          polar: true
        },
        title: {

          visible: false,
          text: 'Impfstatus in Deutschland',
          style: {
            color: 'transparent'
          }
        },
        legend: {
          itemStyle: {
            color: '#FFFFFF',
            fontWeight: 'normal',
            fontSize: 'smaller'
          }
        },
        tooltip: {
          enabled: false
        },
        pane: {
          size: '100%',
          innerSize: '20%',
          endAngle: 360 / 100 * this.herdImmunity
        },
        xAxis: {
          lineWidth: 0,
          categories: [
            '1. Imfpung',
            '2. Impfung',
            '3. Impfung'
          ],
          labels: {
            style: {
              color: '#FFFFFF'
            }
          }
        },
        yAxis: {
          crosshair: {
            enabled: true
          },
          lineWidth: 0,
          tickInterval: 10,
          endOnTick: true,
          labels: {
            style: {
              color: '#FFFFFF'
            }
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.1
          }
        },
        series: [
          {
            name: `1. Impfung: ${this.firstVaccinationQuote}%`,
            data: [parseFloat(this.firstVaccinationQuote), 0, 0]
          },
          {
            name: `2. Impfung: ${this.secondVaccinationQuote}%`,
            data: [0, parseFloat(this.secondVaccinationQuote), 0]
          },
          {
            name: `Booster: ${this.boosterVaccinationQuote}%`,
            data: [0, 0, parseFloat(this.boosterVaccinationQuote)]
          }
        ]
      }
    },
    firstVaccinationQuote () {
      if (this.data.quote) {
        return this.rounded(this.data.quote * 100)
      } else {
        return 0.0
      }
    },
    secondVaccinationQuote () {
      if (this.data.secondVaccination && this.data.secondVaccination.vaccinated) {
        return this.rounded(this.data.secondVaccination.quote * 100)
      } else {
        return 0.0
      }
    },
    boosterVaccinationQuote () {
      if (this.data.boosterVaccination && this.data.boosterVaccination.vaccinated) {
        return this.rounded(
          this.data.administeredVaccinations / 100 /
          this.data.boosterVaccination.vaccinated)
      } else {
        return 0.0
      }
    },
    herdImmunity () {
      return 85.0
    }
  },
  created () {
    this.getData()
    window.addEventListener('resize', this.resize)
  },
  unmounted () {
    window.removeEventListener('resize', this.resize)
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
      return value.toFixed(1)
    },
    resize (e) {
      this.$refs.chart.chart.reflow()
    }
  }
}
</script>

<style lang="sass">
.chart
  height: calc(100vh - 240px)
.source
  top: 0
  position: relative
  margin-left: auto
  margin-right: auto
  text-align: center

</style>
