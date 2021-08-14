import axios from 'axios'

const SERVER = 'https://api.coronavis.dbvis.de'

class CoronavisService {
  async getFederalEmergencyBrake (ags) {
    const fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - 3)
    const from = fromDate.toISOString().split('T')[0]

    const toDate = new Date()
    toDate.setDate(toDate.getDate() + 3)
    const to = toDate.toISOString().split('T')[0]

    const url =
      `${SERVER}/federal-emergency-brake?ids=${ags}&from=${from}&to=${to}`

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data
    }
  }
}

export const coronavisService = new CoronavisService()
