
<script>
import { Doughnut } from 'vue3-chart-v2'
import { coronaZahlenService } from '@/services/corona-zahlen.service'

export default {
  name: 'Vaccination',
  extends: Doughnut,
  data () {
    return {
      isLoading: true,
      error: false,
      data: {
        quote: 0,
        secondVaccination: {
          quote: 0
        }
      },
      meta: {},
      options: {
        responsive: true,
        aspectRatio: 2,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: Number,
            min: 0,
            max: 100
          }
        },
        elements: {
          arc: {
            borderColor: 'transparent'
          }
        },
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Impfquote Deutschland'
          }
        }
      }
    }
  },
  computed: {
    chartdata () {
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
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.isLoading = true

      coronaZahlenService.getVaccinations()
        .then(result => {
          this.data = result.data
          this.meta = result.meta
          this.renderChart(this.chartdata, this.options)
        })
        .catch(error => {
          console.error(error)
          this.error = 'Fehler beim Laden der Daten von api.corona-zahlen.org'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    rounded (value) {
      return value.toFixed(2)
    }
  }

}
</script>
