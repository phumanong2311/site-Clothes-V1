import React from 'react'
import conf from '../../../config'
const domain = conf.server.domain

class BrandLogo extends React.PureComponent {

  componentDidMount () {
    this.loadSlide()
  }

  componentDidUpdate () {
    this.loadSlide()
  }

  loadSlide () {
    $(function () {
      jQuery("#galleries-slider .slider-items").owlCarousel({
        autoplay: !0,
        items: 6,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [320, 1],
        navigation: !0,
        navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
        slideSpeed: 500,
        pagination: !1
      })
    })
  }
  render () {
    const {galleries = []} = this.props
    return(
      <div className='brand-logo bounceInUp animated'>
        <div className='container'>
          <div className='slider-items-products'>
            <div id='galleries-slider' className='product-flexslider hidden-buttons'>
              <div className='slider-items slider-width-col6'>
                {galleries.map((el, i) => <div key={`${el}-${i}`} className='item'><a><img src={domain + el.image} alt='Image' /></a></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BrandLogo