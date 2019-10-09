import Adapter from './adapter'
import Config from './adapter/config'
import handleError from './error'
import Base from './base'

export default class Category extends Base {
  constructor () {
    super()
    var conf = new Config()
    this.adapter = new Adapter(conf.get())
  }

  menu (payload = {}, cb) {
    payload['api'] = '/web/menu'
    this.adapter.get('/base-api', payload, (error, resp) => {
      if (error) return handleError(error, false, cb)
      if (resp.status !== 200) return cb(resp.message)
      // this.emit('get-categories', resp.data)
      if (typeof cb === 'function') {
        return cb(null, resp.data)
      }
    })
  }

  get (payload = {}, cb) {
    payload['api'] = '/web/homepage'
    this.adapter.get('/base-api', payload, (error, resp) => {
      if (error) return handleError(error, false, cb)
      if (resp.status !== 200) return cb(resp.message)
      this.emit('get-homepage', resp.data)
      if (typeof cb === 'function') {
        return cb(null, resp.data)
      }
    })
  }
}
