import React from 'react'

class PromoBanner extends React.PureComponent {
  render() {
    return(
      <div className='promo-banner-section container wow bounceInDown animated'>
        <div className='row'>
          <div className='col-lg-6 col-sm-6'><img alt='promo-banner2' src='images/promo-banner2.png' /></div>
          <div className='col-lg-6 col-sm-6'><img alt='promo-banner4' src='images/promo-banner4.png' /></div>
        </div>
      </div>
    )
  }
}
export default PromoBanner