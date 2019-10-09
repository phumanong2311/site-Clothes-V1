import categoryListener from './category'
import homeListener from './home'
export default (getCtr) => {
  return {
    setupAPIListeners: () => {
      categoryListener(getCtr)
      homeListener(getCtr)
    }
  }
}
