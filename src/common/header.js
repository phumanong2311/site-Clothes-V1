import React from 'react'
import HeaderContainer from './headerContainer'
import Nav from './nav'

class Header extends React.PureComponent {
  render () {
    const {categories} = this.props
    return (
      <React.Fragment>
        <HeaderContainer />
        <Nav categories={categories || []}/>
      </React.Fragment>
    )
  }  
}
export default Header