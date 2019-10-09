import React from 'react'

class OfferBannerInner extends React.PureComponent {
	render() {
		return(
			<div className='offer-banner-section'>
				<div className='container'>
					<div className='row'>
					<div className='offer-inner col-lg-12'>
						<div className='left wow bounceInLeft animated'>
						<div className='col'><a href='#'><img src='images/offer-banner1.jpg' alt='offer banner1' /></a></div>
						<div className='col mid'><a href='#'><img src='images/offer-banner2.jpg' alt='offer banner2' /></a></div>
						<div className='col last'><a href='#'><img src='images/offer-banner3.jpg' alt='offer banner3' /></a></div>
						</div>
						<div className='right wow bounceInRight animated'>
						<div className='col'>
							<div className='add-slider'>
							<ul id='add-slideshow'>
								<li> <a href='#' title=''><img src='images/offer-banner4.jpg' alt='' /></a></li>
								<li> <a href='#' title=''><img src='images/offer-banner5.jpg' alt='' /></a></li>
								<li> <a href='#' title=''><img src='images/offer-banner6.jpg' alt='' /></a></li>
							</ul>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
      </div>
		)
	}
}
export default OfferBannerInner