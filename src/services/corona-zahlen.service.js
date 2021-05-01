import axios from 'axios'

class CoronaZahlenService {
  async getVaccinations () {
    const url = 'https://api.corona-zahlen.org/vaccinations'

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data
    }
  }
}

export const coronaZahlenService = new CoronaZahlenService()
