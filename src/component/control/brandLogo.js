import React from 'react'

class BrandLogo extends React.PureComponent {
  render() {
    const arr = [
      '/images/b-logo1.png',
      '/images/b-logo2.png',
      '/images/b-logo3.png',
      '/images/b-logo4.png',
      '/images/b-logo5.png',
      '/images/b-logo6.png',
      '/images/b-logo1.png',
      '/images/b-logo4.png'
    ]
    return(
      <div className='brand-logo bounceInUp animated'>
        <div className='container'>
          <div className='slider-items-products'>
            <div id='brand-logo-slider' className='product-flexslider hidden-buttons'>
              <div className='slider-items slider-width-col6'>
                {arr.map((el, i) => <div key={`${el}-${i}`} className='item'><a href='#x'><img src={el} alt='Image' /></a></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BrandLogo