import React from 'react'

class ProductHotNew extends React.PureComponent {
	render() {
		let arrString = '1,2,3,4,5,6,7,8'
		return(
			<section className='middle-slider container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='bag-product-slider small-pr-slider wow bounceInLeft animated'>
							<div className='slider-items-products'>
								<div className='new_title center'>
									<h2>Is Hot</h2>
								</div>
								<div id='bag-seller-slider' className='product-flexslider hidden-buttons'>
									<div className='slider-items slider-width-col3'>

										{arrString.split(',').map((el, i) => {
											return <div key={i} className='item'>
												<div className='product-block'>
													<div className='product-image'>
														<a href='#'>
														<figure className='product-display'>
															<div className='new-label new-top-left'>New</div>
															<img src='products-images/product21.jpg' className='product-mainpic' alt='Sample Product' />
															<img className='product-secondpic' alt='Sample Product' src='products-images/product21.jpg' />
														</figure>
														</a>
													</div>
													<div className='product-meta'>
														<div className='product-action'>
															<a className='addcart' href='#'><i className='icon-shopping-cart'>&nbsp;</i></a>
															<a href='quick_view.html' className='quickview'><i className='icon-zoom'>&nbsp;</i></a>
														</div>
													</div>
												</div>
												<div className='item-info'>
													<div className='info-inner'>
														<div className='item-title'><a href='#' title='Sample Product'>Sample Product</a></div>
														<div className='item-content'>
															<div className='item-price'>
																<div className='price-box'>
																	<p className='old-price'><span className='price-label'>Regular Price:</span><span className='price'> $100.00 </span></p>
																	<p className='special-price'><span className='price-label'>Special Price</span><span className='price'> $90.00 </span></p>
																</div>
															</div>
															<div className='rating'>
																<div className='ratings'>
																	<div className='rating-box'>
																		<div className='rating' style={{ width: '0%' }}></div>
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
export default ProductHotNew