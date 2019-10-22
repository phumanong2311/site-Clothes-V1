import React from 'react'

export default class Footer extends React.PureComponent {
  render() {
    return <footer className='footer bounceInUp animated'>
      <div className='newsletter-wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='newsletter'>
                <form>
                  <h4><span>Subscribe for offers</span></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque, perferendis accusamus porro illo exercitationem molestias.</p>
                  <input type='text' placeholder='Enter your email address' className='input-text required-entry validate-email' title='Sign up for our newsletter' id='newsletter1' name='email' />
                  <button className='subscribe' title='Subscribe' type='submit'><span>Subscribe</span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='footer-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-4'>
              <div className='footer-logo'><a href='#' title='Logo'><img src='/images/footer-logo.png' alt='Logo' /></a></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam arcu, placerat ut odio vel, ultrices vehicula erat. Ut mauris diam, egestas nec lacus sit amet. </p>
              </div>
            <div className='col-md-2 col-sm-4'>
              <h4>Shopping Guide</h4>
              <ul className='links'>
                <li className='first'><a href='#' title='How to buy'>How to buy</a></li>
                <li><a href='faq.html' title='FAQs'>FAQs</a></li>
                <li><a href='#' title='Payment'>Payment</a></li>
                <li><a href='#' title='Shipment&lt;/a&gt;'>Shipment</a></li>
                <li><a href='#' title='Where is my order?'>Where is my order?</a></li>
                <li className='last'><a href='#' title='Return policy'>Return policy</a></li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-4'>
              <h4>Style Advisor</h4>
              <ul className='links'>
                <li className='first'><a title='Your Account' href='login.html'>Your Account</a></li>
                <li><a title='Information' href='#'>Information</a></li>
                <li><a title='Addresses' href='#'>Addresses</a></li>
                <li><a title='Addresses' href='#'>Discount</a></li>
                <li><a title='Orders History' href='#'>Orders History</a></li>
                <li className='last'><a title=' Additional Information' href='#'>Additional Information</a></li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-4'>
              <h4>Information</h4>
              <ul className='links'>
                <li className='first'><a href='sitemap.html' title='Site Map'>Site Map</a></li>
                <li><a href='#/' title='Search Terms'>Search Terms</a></li>
                <li><a href='#' title='Advanced Search'>Advanced Search</a></li>
                <li><a href='contact_us.html' title='Contact Us'>Contact Us</a></li>
                <li><a href='#' title='Suppliers'>Suppliers</a></li>
                <li className=' last'><a href='#' title='Our stores' className='link-rss'>Our stores</a></li>
              </ul>
            </div>
            <div className='col-md-3 col-sm-4'>
              <h4>Contact us</h4>
              <div className='contacts-info'>
                <address>
                <i className='add-icon'>&nbsp;</i>123 Main Street, Anytown, <br />
                &nbsp;CA 12345  USA
                </address>
                <div className='phone-footer'><i className='phone-icon'>&nbsp;</i> +1 800 123 1234</div>
                <div className='email-footer'><i className='email-icon'>&nbsp;</i> <a href='mailto:support@magikcommerce.com'>support@magikcommerce.com</a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='payment-accept'>
                <img src='/images/payment-1.png' alt='' />
                <img src='/images/payment-2.png' alt='' />
                <img src='/images/payment-3.png' alt='' />
                <img src='/images/payment-4.png' alt='' /> </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='social'>
                <ul>
                  <li className='fb'><a href='#'></a></li>
                  <li className='tw'><a href='#'></a></li>
                  <li className='googleplus'><a href='#'></a></li>
                  <li className='rss'><a href='#'></a></li>
                  <li className='pintrest'><a href='#'></a></li>
                  <li className='linkedin'><a href='#'></a></li>
                  <li className='youtube'><a href='#'></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-xs-12 coppyright'> &copy; 2019 TACompany - Sunny Team.</div>
          </div>
        </div>
      </div>
    </footer>
  }
}