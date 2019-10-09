import React from 'react'
import Header from '../common/header'
import MobileMenu from '../common/mobileMenu'
import Footer from '../common/footer'
import { withContainer } from '../context'

class DefaultLayout extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    this.props.api.home.menu({}, (err, data) => {
      if (err) return null
      this.props.data.setCategories(data.menu)
      this.setState({categories: data.menu})
    })
  }

  render () {
    const {categories} = this.state
    return (
      <React.Fragment>
        <div id='page'>
          {/* <Header categories={categories} /> */}
          <Header />
          {this.props.children}
          <Footer />
        </div>
        <MobileMenu />
      </React.Fragment>
      
    )
  }
}

export default withContainer(React.memo(DefaultLayout), (c, props) => ({
  api: c.api,
  data: c.data
}))
