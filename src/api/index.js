import Category from './category'
import Home from './home'
import List from './list'
import Detail from './detail'

export default () => {
  return {
    category: new Category(),
    home: new Home(),
    list: new List(),
    detail: new Detail()
  }
}
