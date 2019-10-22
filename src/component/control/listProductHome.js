import React from 'react'
import conf  from '../../../config'
import formatCurrency from 'format-currency'

const domain = conf.server.domain

class ListProductHome extends React.PureComponent {

  componentDidMount () {
    this.loadSlide()
  }

  componentDidUpdate () {
    this.loadSlide()
  }

  loadSlide () {
    $(function () {
      jQuery("#best-seller-slider .slider-items").owlCarousel({
        items: 4,
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
  render() {
    const {category, products = []} = this.props
    const categoryLink = _.get(category, 'link')
		return(

			<section className='main-container col1-layout home-content-container'>
				<div className='container'>
					<div className='std'>
						<div className='best-seller-pro wow bounceInUp animated'>
							<div className='slider-items-products'>
								<div className='new_title center'>
									<h2>{category && category.title}</h2>
								</div>
								<div id='best-seller-slider' className='product-flexslider hidden-buttons'>
									<div className='slider-items slider-width-col4'>

										{products.map((el, i) => {
                      const productLink = `/${categoryLink}/${el.link}-${el._id}`
                      const img = domain + el.image
											return <div key={i} className='item'>
												<div className='product-block'>
													<div className='product-image'>
														<a href={productLink}>
														<figure className='product-display'>
															<div className='sale-label sale-top-left'>Sale</div>
															<img src={img} className='product-mainpic' alt='Sample Product' />
															<img className='product-secondpic' alt='Sample Product' src={img} />
														</figure>
														</a>
													</div>
													<div className='product-meta'>
														<div className='product-action'>
															<a className='addcart' href='#'><i className='icon-shopping-cart'>&nbsp;</i> Add to cart </a>
															<a href={productLink} className='quickview'> <i className='icon-zoom'>&nbsp;</i>Quick view</a>
														</div>
													</div>
												</div>
												<div className='item-info'>
													<div className='info-inner'>
														<div className='item-title'><a href={productLink} title='Sample Product'>{el.title}</a></div>
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
															<div className='rating'>
																<div className='ratings'>
																	<div className='rating-box'>
																		<div className='rating' style= {{ width: '80%' }}></div>
																	</div>
																	<p className='rating-links'><a href='#'>1 Review(s)</a> <span className='separator'>|</span><a href='#'>Add Review</a></p>
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
export default ListProductHome