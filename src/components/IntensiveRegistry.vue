<template>
  <div id="intensive-registry">
    <vue-highcharts
      v-if="isLoaded"
      type="chart"
      :options="chartData"
      :redraw-on-update="true"
      :one-to-one-update="false"
      :animate-on-update="true"
    />
  </div>
</template>

<script>
import { diviService } from '@/services/divi.service.js'
import VueHighcharts from 'vue3-highcharts'
import HighCharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(HighCharts)

export default {
  name: 'IntensiveRegistry',
  components: { VueHighcharts },
  props: {
    ags: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLoaded: false,
      data: [],
      meta: {}
    }
  },
  computed: {
    chartData () {
      return {
        colors: ['#41B883', '#ff5555', 'rgb(255, 243, 128)', 'rgb(0, 95, 255)'],
        chart: {
          type: 'bar',
          backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
          visible: false,
          text: 'DIVI Intensivregister',
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
        xAxis: {
          visible: false,
          tickLength: 2
        },
        yAxis: {
          min: 0,
          max: this.data.betten_gesamt,
          endOnTick: false,
          lineWidth: 0,
          labels: {
            style: {
              color: '#FFFFFF'
            }
          },
          title: {
            text: 'DIVI Intensivbetten Belegung',
            style: {
              color: '#FFFFFF'
            }
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [
          {
            name: `frei (${this.data.betten_frei})`,
            data: [
              parseFloat(this.data.betten_frei)
            ]
          },
          {
            name: `Covid beatmet (${this.data.faelle_covid_aktuell_beatmet})`,
            data: [
              parseFloat(this.data.faelle_covid_aktuell_beatmet)
            ]
          },
          {
            name: `Covid (${this.data.faelle_covid_aktuell})`,
            data: [
              parseFloat(this.data.faelle_covid_aktuell)
            ]
          },
          {
            name: `anderweitig belegt (${this.data.betten_belegt - this.data.faelle_covid_aktuell - this.data.faelle_covid_aktuell_beatmet})`,
            data: [
              parseFloat(this.data.betten_belegt - this.data.faelle_covid_aktuell - this.data.faelle_covid_aktuell_beatmet)
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.isLoaded = false
      diviService.getIntensiveRegistry(this.ags)
        .then(result => {
          this.data = result
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten vom Coronavis-Server'
        })
        .finally(() => {
          this.isLoaded = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-highcharts {
  height: 220px;
}
</style>
