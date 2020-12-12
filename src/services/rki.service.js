import axios from 'axios'

class RkiService {

  getIncidence (objectId) {
    const url =
      'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in (' +
      objectId +
      ')&outFields=objectId,last_update,cases7_per_100k,EWZ,BEZ,GEN,IBZ&returnGeometry=false&f=json'
    const httpClient = axios.create({
      baseURL: url,
      timeout: 10000, // indicates, 10000ms ie. 10 second
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return httpClient.get()
  }

}

export const rkiService = new RkiService()
