import React from 'react'

class ListProductHome extends React.PureComponent {
  render() {

		let arrString = '1,2,3,4,5,6,7,8'

		return(
			<section className='main-container col1-layout home-content-container'>
				<div className='container'>
					<div className='std'>
						<div className='best-seller-pro wow bounceInUp animated'>
							<div className='slider-items-products'>
								<div className='new_title center'>
									<h2>Category</h2>
								</div>
								<div id='best-seller-slider' className='product-flexslider hidden-buttons'>
									<div className='slider-items slider-width-col4'>

										{arrString.split(',').map((el, i) => {
											return <div key={i} className='item'>
												<div className='product-block'>
													<div className='product-image'>
														<a href='#'>
														<figure className='product-display'>
															<div className='sale-label sale-top-left'>Sale</div>
															<img src='products-images/product1.jpg' className='product-mainpic' alt='Sample Product' />
															<img className='product-secondpic' alt='Sample Product' src='products-images/product1.jpg' />
														</figure>
														</a>
													</div>
													<div className='product-meta'>
														<div className='product-action'>
															<a className='addcart' href='#'><i className='icon-shopping-cart'>&nbsp;</i> Add to cart </a>
															<a href='#' className='quickview'> <i className='icon-zoom'>&nbsp;</i>Quick view</a>
														</div>
													</div>
												</div>
												<div className='item-info'>
													<div className='info-inner'>
														<div className='item-title'><a href='#' title='Sample Product'> Sample Product </a></div>
														<div className='item-content'>
															<div className='item-price'>
																<div className='price-box'><span className='regular-price' ><span className='price'>$125.00</span></span></div>
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