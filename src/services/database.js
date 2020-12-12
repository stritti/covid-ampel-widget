import Dexie from 'dexie'

const db = new Dexie('inzidenz')

class Database {

  constructor () {
    db.version(1).stores({
      inzidenz: 'id,OBJECTID,last_update,cases7_per_100k,EWZ,BEZ,GEN,[OBJECTID+last_update]'
    })
  }

  add(data) {
    data.last_update = this.getTimestamp(data.last_update)
    data.id = data.OBJECTID + '-' + this.formatDate(data.last_update)

    db.inzidenz.put(data, data.id)
  }

  async getData(objectId, offset) {
    // console.log(`objectId: ${objectId}, offset: ${offset}`)
    let date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    let dateOffset = new Date(date.setDate(date.getDate() + offset))
    // console.log(`DateOffset ${ dateOffset.toLocaleDateString("de-DE") } ${dateOffset.getTime()}`)

    let result = await db.inzidenz
      .where({ OBJECTID: objectId, last_update: dateOffset.getTime() })
      .first()
      .catch(error => {
          console.error(error.stack || error)
      })

    return result
  }

  getTimestamp(dateStr) {
    const regex = /([\d]+)\.([\d]+)\.([\d]+), ([0-2]?[0-9]):([0-5][0-9])/g
    let m = regex.exec(dateStr)
    return new Date(m[3], m[2]-1, m[1], m[4], m[5]).getTime()
  }
  formatDate(value) {
    let date = new Date(value)
    return date.toLocaleDateString("de-DE")
  }

}

export const database = new Database()
