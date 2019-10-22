import React from 'react'

class HeaderContainer extends React.PureComponent {
  render() {
    return(
      <header className='header-container'>
        <div className='header-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-5 col-xs-12'>
                <div className='phone hidden-xs'>
                  <div className='phone-box'><strong>Call:</strong><span>+1 800 123 1234</span></div>
                </div>
                <div className='welcome-msg hidden-xs'>Default welcome msg! </div>
              </div>
              
              
              <div className='col-lg-6 col-md-6 col-sm-7 col-xs-12'>
                <div className='top-cart-contain'>
                  <div className='mini-cart'>
                    <div data-toggle='dropdown' data-hover='dropdown' className='basket dropdown-toggle'>
                      <a href='#'>
                        <i className='icon-cart' />
                        <div className='cart-box'><span id='cart-total'>2</span></div>
                      </a>
                    </div>
                    <div>
                      <div style={{display: 'none'}} className='top-cart-content arrow_box'>
                        <div className='block-subtitle'>Recently added item(s)</div>
                        <ul id='cart-sidebar' className='mini-products-list'>
                          <li className='item even'>
                            <a className='product-image' href='#' title='Downloadable Product '>
                              <img alt='Downloadable Product ' src='/products-images/product1.jpg' width='80' />
                            </a>
                            <div className='detail-item'>
                              <div className='product-details'>
                                <a href='#' title='Remove This Item' className='btn-remove1'>Remove This Item</a>
                                <a className='btn-edit' title='Edit item' href='#'>Edit item</a>
                                <p className='product-name'><a href='#' title='Sample Product'>Sample Product</a></p>
                              </div>
                              <div className='product-details-bottom'>
                                <span className='price'>$100.00</span>
                                <span className='title-desc'>Qty:</span>
                                <strong>1</strong>
                              </div>
                            </div>
                          </li>
                          <li className='item last odd'>
                            <a className='product-image' href='#' title=' Lucky Brand Janis '>
                              <img alt='Sample Product' src='/products-images/product2.jpg' width='80' />
                            </a>
                            <div className='detail-item'>
                              <div className='product-details'>
                                <a href='#' title='Remove This Item' className='btn-remove1'>Remove This Item</a>
                                <a className='btn-edit' title='Edit item' href='#'>Edit item</a>
                                <p className='product-name'> <a href='#' title=' Lucky Brand Janis '>Sample Product</a></p>
                              </div>
                              <div className='product-details-bottom'>
                                <span className='price'>$320.00</span>
                                <span className='title-desc'>Qty:</span>
                                <strong>2</strong>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className='top-subtotal'>Subtotal:<span className='price'>$420.00</span></div>
                        <div className='actions'>
                          <button className='btn-checkout' type='button'><span>Checkout</span></button>
                          <button className='view-cart' type='button'><span>View Cart</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='ajaxconfig_info' style={{display: 'none'}}>
                    <a href='#'></a>
                    <input value='' type='hidden' />
                    <input id='enable_module' value='1' type='hidden' />
                    <input className='effect_to_cart' value='1' type='hidden' />
                    <input className='title_shopping_cart' value='Go to shopping cart' type='hidden' />
                  </div>
                </div>
                
                <div className='toplinks'>
                  <div className='links'>
                    <div className='login'><a title='Login' href='login.html'><span className='hidden-xs'>Log In</span></a></div>
                    <div className='wishlist'>
                      <a title='My Wishlist'  href='wishlist.html'>
                        <span className='hidden-xs'><i className='icon-star'>&nbsp;</i><span className='wishlist-items'>0</span></span>
                      </a>
                    </div>
                  </div>
                </div>
          
                <div className='collapse navbar-collapse'>
                  <form className='navbar-form' role='search'>
                    <div className='input-group'>
                      <input type='text' className='form-control' placeholder='Search' />
                      <span className='input-group-btn'>
                        <button type='reset' className='btn btn-default'><span className='glyphicon glyphicon-remove'><span className='sr-only'>Close</span></span></button>
                        <button type='submit' className='btn btn-default'><span className='glyphicon glyphicon-search'><span className='sr-only'>Search</span></span></button>
                      </span>
                    </div>
                  </form>
                </div>
              
              </div>
            
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default HeaderContainer