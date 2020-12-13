import axios from 'axios'

class RkiService {

  async getIncidence (objectId) {
    const url =
      'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in (' +
      objectId +
      ')&outFields=objectId,last_update,cases7_per_100k,EWZ,BEZ,GEN,IBZ&returnGeometry=false&f=json'

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data
    }
  }

  async getAreas () {
    const url =
      'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson'

    const result = await axios.get(url)
    if (result.error) {
      console.error(result.error)
    } else {
      return result.data.features
    }
  }

}

export const rkiService = new RkiService()
