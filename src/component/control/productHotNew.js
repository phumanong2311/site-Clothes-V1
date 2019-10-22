import React from 'react'
import _ from 'lodash'
import conf from '../../../config'
import formatCurrency from 'format-currency'

const domain = conf.server.domain

class ProductHotNew extends React.PureComponent {
  componentDidMount () {
    this.loadSlide()
  }

  componentDidUpdate () {
    this.loadSlide()
  }

  loadSlide () {
    const {id} = this.props
    $(function () {
      jQuery("#" + id + " .slider-items").owlCarousel({
        items: 6,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [320, 1],
        navigation: !0,
        navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
        slideSpeed: 100,
        pagination: !1
      })
    })
  }
  render() {
    const {products = [], id ='', title, categories} = this.props
		return(
			<section className='middle-slider container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='bag-product-slider small-pr-slider wow bounceInLeft animated'>
							<div className='slider-items-products'>
								<div className='new_title center'>
									<h2>{title}</h2>
								</div>
								<div id={id} className='product-flexslider hidden-buttons'>
									<div className='slider-items slider-width-col3'>
										{products.map((el, i) => {
                      const cat = categories.find(c => c._id === el.categoryId)
                      const catLink = _.get(cat, 'link')
                      const linkProduct = `/${catLink}/${el.link}-${el._id}`
											return <div key={el._id} className='item'>
                        <div className='product-block'>
                          <div className='product-image'>
                            <a href={linkProduct}>
                              <figure className='product-display'>
                                {el.isNewProduct && <div className='new-label new-top-left'>New</div>}
                                {el.isHot && <div className='sale-label new-top-right'>Hot</div>}
                                <img src={`${domain}/${el.image}`} className='product-mainpic' alt='Sample Product' />
                                <img className='product-secondpic' alt='Sample Product' src={`${domain}/${el.image}`} />
                              </figure>
                            </a>
                          </div>
                          <div className='product-meta'>
                            <div className='product-action'>
                              <a className='addcart' href='#'><i className='icon-shopping-cart'>&nbsp;</i></a>
                              <a href={linkProduct} className='quickview'><i className='icon-zoom'>&nbsp;</i></a>
                            </div>
                          </div>
                        </div>
                        <div className='item-info'>
                          <div className='info-inner'>
                            <div className='item-title'><a href={linkProduct} title='Sample Product'>{el.title}</a></div>
                            <div className='item-content'>
                              <div className='item-price'>
                                <div className='price-box'>
                                  {el.price && <p className='old-price'>
                                    <span className='price-label'>Regular Price:</span><span className={el.priceSale ? 'price' : ''}>
                                    {formatCurrency(el.price, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })}
                                    </span>
                                  </p>}
                                  {el.priceSale && <p className='special-price'>
                                    <span className='price-label'>Special Price</span><span className='price'>
                                    {formatCurrency(el.priceSale, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })}
                                    </span>
                                  </p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
										})}
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      </section>
		)
	}
}
export default ProductHotNew