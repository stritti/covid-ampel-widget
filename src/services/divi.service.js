import axios from 'axios'

const SERVER = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services'
const BASE_URL = `${SERVER}/DIVI_Intensivregister_Landkreise/FeatureServer/0`

class DiviService {
  async getIntensiveRegistry (objectId) {
    const url =
      `${BASE_URL}/query?where=AGS='${objectId}'&outFields=*&outSR=4326&f=json`

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      let resultData
      if (result.data) {
        resultData = result.data.features[0].attributes
      } else {
        resultData = null
      }
      return resultData
    }
  }
}

export const diviService = new DiviService()
