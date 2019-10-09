import React from 'react'

class Nav extends React.PureComponent {
	render() {
		return(
			<nav>
				<div className='header container'>
					<div className='row'>
						<div className='col-xs-12'>
							<div className='mm-toggle-wrap'>
								<div className='mm-toggle'><i className='icon-align-justify' /><span className='mm-label'>Menu</span></div>
							</div>
							<a className='logo' title='Magento Commerce' href='#'>
								<img alt='Magento Commerce' src='images/logo.png' />
							</a> 
							<div className='nav-inner'>
								<ul id='nav' className=''>
									<li className='level0 parent drop-menu'><a href='#' className='active' ><span>Home</span> </a>
										<ul className='level1' style={{display: 'none'}}>
											<li className='level1 first parent'>
												<a href='#'><span>Full Width Layout</span></a>
											</li>
											<li className='level1 parent'><a href='#'><span>Boxed Layout</span></a> </li>
											<li className='level1 parent'><a href='#'><span>Red</span></a> </li>
											<li className='level1 parent'><a href='#'><span>Blue</span></a> </li>
											<li className='level1 parent'><a href='#'><span>Green</span></a> </li>
											<li className='level1 parent'><a href='#'><span>Lavender</span></a> </li>
											<li className='level1 parent'><a href='#'><span>Yellow</span></a> </li>
										</ul>
									</li>
									<li className='level0 parent drop-menu'><a href='#'><span>Pages</span> </a>
									</li>
									<li className='level0 nav-5 level-top first'><a href='#' className='level-top'><span>Women</span></a> 
									</li>
									<li className='level0 nav-7 level-top parent'><a href='#' className='level-top'><span>Men</span></a>
									</li>
									<li className='level0 parent drop-menu'><a href='#'><span>Boys</span></a>
									</li>
									<li className='level0 nav-6 level-top parent'><a href='#' className='level-top'><span>Electronics</span></a>
									</li>
									<li className='level0 nav-7 level-top parent'><a className='level-top' href='#'><span>Furniture</span></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}
export default Nav