import React from 'react'

class OurFearturesBox extends React.PureComponent {
  render() {
    return(
      <div className='our-features-box bounceInUp animated'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-xs-12 col-sm-4'>
              <div className='feature-box'>
                <div className='icon-truck'>&nbsp;</div>
                <div className='content'>Free Shipping</div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </div>
            </div>
            <div className='col-md-4 col-xs-12 col-sm-4'>
              <div className='feature-box'>
                <div className='icon-love'>&nbsp;</div>
                <div className='content'>Customer Support</div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </div>
            </div>
            <div className='col-md-4 col-xs-12 col-sm-4'>
              <div className='feature-box'>
                <div className='icon-return'>&nbsp;</div>
                <div className='content'>30 days money back</div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua domenus orioneu.</span> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default OurFearturesBox