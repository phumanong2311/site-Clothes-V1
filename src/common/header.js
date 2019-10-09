import React from 'react'
import HeaderContainer from './headerContainer'
import Nav from './nav'

class Header extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <HeaderContainer />
        <Nav />
      </React.Fragment>
    )
  }  
}
export default Header