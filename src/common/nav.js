import React from 'react'

class Nav extends React.PureComponent {
	render () {
    const {categories} = this.props
    const parent = categories.filter(el => !el.parentId)
		return (
			<nav>
				<div className='header container'>
					<div className='row'>
						<div className='col-xs-12'>
							<div className='mm-toggle-wrap'>
								<div className='mm-toggle'><i className='icon-align-justify' /><span className='mm-label'>Menu</span></div>
							</div>
							<a className='logo' title='Magento Commerce' href='/'>
								<img alt='Magento Commerce' src='/images/logo.png' />
							</a> 
							<div className='nav-inner'>
								<ul id='nav' className=''>
                  <li key={'home'} className='level0 parent drop-menu'><a href={`/`} className='active'><span>Home</span></a></li>
                  {parent.map((el, i) => {
                    const children = categories.filter(e => e.parentId === el._id)
                    if (children.length > 0) {
                      return <li key={el._id} className='level0 parent drop-menu'><a href={`/${el.link}`}  ><span>{el.title}</span> </a>
                        <ul className='level1'>
                          {children.map((child, i) => {
                            return <li key={`child-${child._id}`} className='level1 parent'>
                              <a href={`/${child.link}`}><span>{child.title}</span></a>
                            </li>
                          })}
                        </ul>
                      </li>
                    } else {
                      return <li key={el._id} className='level0 parent drop-menu'><a href={`/${el.link}`}><span>{el.title}</span></a></li>
                    }
                  })}
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