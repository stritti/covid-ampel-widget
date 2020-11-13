import Dexie from 'dexie'

  const db = new Dexie('inzidenz')

class Database {

  constructor () {
    db.version(1).stores({
      inzidenz: 'id,OBJECTID,last_update,cases7_per_100k,EWZ,BEZ,GEN,[OBJECTID+last_update]'
    })
  }

  add(data) {
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

}

export const database = new Database()
