import ctrServices from './services'
import ctrApi from '../api'
import ctrEventListener from './event.listener'
import propsDefault from './deault.props'
import _ from 'lodash'

function controller () {
  var self = this
  self.get = () => self
  _.assignIn(self, propsDefault)
  _.assignIn(self, { api: ctrApi() })
  _.assignIn(self, ctrServices(self.get))
  self.generateDataSetter()
  _.assignIn(self, ctrEventListener(self.get))
  self.setupAPIListeners()
  self.runApplication = (cb) => {
    return cb(null)
    // return self.api.home.menu({}, (error, data) => {
    //   self.data.setCategories(data.menu)
    //   return cb(error, data)
    // })
  }
}

export default controller
