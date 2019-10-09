import React from 'react'

class OfferBanner extends React.PureComponent {
	render() {
		const arr = [
			'/images/offer-banner1.png',
			'/images/offer-banner2.png',
			'/images/offer-banner3.png'
		]
		return(
			<div className='offer-banner-section'>
				<div className='container'>
					<div className='row'>
						{arr.map((el, i) => {
							return <div key={el + '-' + i} className='col over-effect col-lg-4 col-xs-12 col-sm-4 wow bounceInUp animated'>
								<img src={el} alt='offer banner1' />
								<div className='mask'><a href='#' className='info'>Read More</a></div>
							</div>
						})}
					</div>
				</div>
			</div>
		)
	}
}
export default OfferBanner