
<script>
import { Doughnut } from 'vue3-chart-v2'

export default {
  name: 'VaccinationChart',
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      options: {
        responsive: true,
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
            position: 'top',
            labels: {
              color: 'var(--text)'
            }
          },
          title: {
            display: true,
            text: 'Impfquote Deutschland'
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
