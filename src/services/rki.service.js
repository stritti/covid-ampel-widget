import axios from 'axios'

const BASE_URL = 'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/'

class RkiService {
  async getIncidence (objectId) {
    const url =
      `${BASE_URL}query?where=OBJECTID in (${objectId})&outFields=objectId,last_update,cases7_per_100k,EWZ,BEZ,RS,GEN,IBZ&returnGeometry=false&f=json`

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data
    }
  }

  async getIncidenceHistory (objectId) {
    const url =
    `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0//query?where=IdLandkreis%3D${objectId}&objectIds=&time=&resultType=none&outFields=AnzahlFall,SummeFall,Meldedatum&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Meldedatum+DESC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=12&sqlFormat=none&f=json`

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data
    }
  }

  async getAreas () {
    const url =
      `${BASE_URL}query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson`

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data.features
    }
  }

  async getDistrictName ({ latitude, longitude }) {
    const url = `${BASE_URL}query?where=1%3D1&outFields=RS,GEN,cases7_bl_per_100k,cases7_per_100k,BL&geometry=${longitude.toFixed(3)}%2C${latitude.toFixed(3)}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json`
    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      const { features } = result.data
      return features.length > 0 ? features[0].attributes.GEN.toString() : null
    }
  }
}

export const rkiService = new RkiService()
