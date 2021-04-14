<template>
  <div id="vaccination">
    <van-progress
      id="required"
      ref="required"
      track-color="#588c54"
      color="#fc0008"
      stroke-width="20"
      percentage="70"
    />
    <van-progress
      id="first"
      ref="first"
      :pivot-text="firstVaccinationQuoteLabel"
      stroke-width="20"
      track-color="transparent"
      color="#ffb534"
      :percentage="firstVaccinationQuote"
    />
    <van-progress
      id="second"
      ref="second"
      :pivot-text="secondVaccinationQuoteLabel"
      stroke-width="20"
      track-color="transparent"
      color="#087c04"
      :percentage="secondVaccinationQuote"
    />
    <div>Impffortschritt in Deutschland</div>
  </div>
</template>

<script>
import { coronaZahlenService } from '@/services/corona-zahlen.service'
export default {
  name: 'Vaccination',
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
      meta: {}
    }
  },
  computed: {
    firstVaccinationQuote () {
      if (this.data.quote) {
        return this.rounded(this.data.quote * 100)
      } else {
        return 0
      }
    },
    firstVaccinationQuoteLabel () {
      return `1.Impfung ${this.firstVaccinationQuote}%`
    },
    secondVaccinationQuote () {
      if (this.data.secondVaccination && this.data.secondVaccination.quote) {
        return this.rounded(this.data.secondVaccination.quote * 100)
      } else {
        return 0
      }
    },
    secondVaccinationQuoteLabel () {
      return `2.Impfung ${this.secondVaccinationQuote}%`
    }
  },
  mounted () {
    this.getData()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getData () {
      this.isLoading = true

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
          this.isLoading = false
        })
    },
    rounded (value) {
      return value.toFixed(2)
    },
    handleResize (event) {
      this.$refs.required.resize()
      this.$refs.first.resize()
      this.$refs.second.resize()
    }
  }

}
</script>

<style lang="scss" scoped>
#vaccination {
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  padding: 0.25rem;
  background-color: var(--background-color);

  #required {
    position: relative;
    top: 12px;
  }
  #first {
    position: relative;
    top: -2px;
  }
  #second {
    position: relative;
    top: -14px;
  }
}
</style>
