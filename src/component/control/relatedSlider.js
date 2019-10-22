import React from 'react'
import _ from 'lodash'
import formatCurrency from 'format-currency'
import conf from '../../../config'


const domain = conf.server.domain
export default class RelatedSlider extends React.PureComponent {

  componentDidMount () {
    this.loadSlide()
  }

  componentDidUpdate () {
    this.loadSlide()
  }

  loadSlide () {
    $(function () {
      jQuery("#related-products-slider .slider-items").owlCarousel({
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: [320, 1],
        navigation: !0,
        navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
        slideSpeed: 500,
        pagination: !1
      })
    })
  }


  render () {
    const {info, productsNew = [], productsHot = [], categories = []} = this.props
    return (
      <>
        <div className='related-slider col-lg-3 col-sm-4 col-md-3 col-xs-12 bounceInDown animated'>
          <div className='slider-items-products'>
            <div className='slider-items-products'>
              <div className='related-block'>
                <div className='new_title center'>
                  <h2><span>Sản Phẩm Mới</span></h2>
                </div>
                <div id='related-products-slider' className='product-flexslider hidden-buttons'>
                  <div className='slider-items slider-width-col4 products-grid'>
                    {
                      productsNew.map(el => {
                        const imgLink = domain + el.image
                        const cat = categories.find(c => c._id === el.categoryId)
                        const catLink = _.get(cat, 'link')
                        const productLink = `/${catLink}/${el.link}-${el._id}`
                        return <div key={`produst-relate-${el._id}`} className='item'>
                          <div className='item-inner'>
                          <div className='item-img'>
                            <div className='product-block'>
                              <div className='product-image'> <a href={productLink}>
                                <figure className='product-display'>
                                  <img src={imgLink} className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                  <img className='product-secondpic' alt='' src={imgLink} />
                                </figure>
                                </a> 
                                </div>
                              <div className='product-meta'>
                                <div className='product-action'>
                                  <a className='addcart'><i className='icon-shopping-cart'>&nbsp;</i></a> 
                                  <a href={productLink} className='quickview'><i className='icon-zoom'>&nbsp;</i></a></div>
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
                                      <div className='rating' style={{width:'50%'}}></div>
                                    </div>
                                    <p className='rating-links'><a href='#'>1 Review(s)</a><span className='separator'>|</span><a href='#'>Add Review</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      })
                    }
                    
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>

        <div className='product-collateral'>
            <div className='col-sm-12 wow bounceInUp animated'>
              <ul id='product-detail-tab' className='nav nav-tabs product-tabs'>
                <li className='active'> <a href='#product_tabs_description' data-toggle='tab'>Mô Tả Sản Phẩm</a> </li>
                {/* <li><a href='#product_tabs_tags' data-toggle='tab'>Tags</a></li>
                <li> <a href='#reviews_tabs' data-toggle='tab'>Reviews</a> </li>
                <li> <a href='#product_tabs_custom' data-toggle='tab'>Custom Tab</a> </li>
                <li> <a href='#product_tabs_custom1' data-toggle='tab'>Custom Tab1</a> </li> */}
              </ul>
              <div id='productTabContent' className='tab-content'>
                <div className='tab-pane fade in active' id='product_tabs_description'>
                  <div className='std'>
                    {info && <div dangerouslySetInnerHTML={{__html: info.content}}></div>}
                  </div>
                </div>
                <div className='tab-pane fade' id='product_tabs_tags'>
                  <div className='box-collateral box-tags'>
                    <div className='tags'>
                      <form id='addTagForm' action='#' method='get'>
                        <div className='form-add-tags'>
                          <label htmlFor='productTagName'>Add Tags:</label>
                          <div className='input-box'>
                            <input className='input-text required-entry' name='productTagName' id='productTagName' type='text' style={{width:'35%'}} />
                            <button type='button' title='Add Tags' className=' button btn-add'> <span>Add Tags</span> </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p className='note'>Use spaces to separate tags. Use single quotes (') for phrases.</p>
                  </div>
                </div>
                <div className='tab-pane fade' id='reviews_tabs'>
                  <div className='box-collateral box-reviews' id='customer-reviews'>
                    <div className='box-reviews1'>
                      <div className='form-add'>
                        <form id='review-form' method='post' action='#'>
                          <h3>Write Your Own Review</h3>
                          <fieldset>
                            <h4>How do you rate this product? <em className='required'>*</em></h4>
                            <span id='input-message-box'></span>
                            <table id='product-review-table' className='data-table'>
                              <colgroup>
                                <col />
                                <col width='1' />
                                <col width='1' />
                                <col width='1' />
                                <col width='1' />
                                <col width='1' />
                              </colgroup>
                              <thead>
                                <tr className='first last'>
                                  <th>&nbsp;</th>
                                  <th><span className='nobr'>1 *</span></th>
                                  <th><span className='nobr'>2 *</span></th>
                                  <th><span className='nobr'>3 *</span></th>
                                  <th><span className='nobr'>4 *</span></th>
                                  <th><span className='nobr'>5 *</span></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className='first odd'>
                                  <th>Price</th>
                                  <td className='value'><input type='radio' className='radio' value='11' id='Price_1' name='ratings[3]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='12' id='Price_2' name='ratings[3]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='13' id='Price_3' name='ratings[3]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='14' id='Price_4' name='ratings[3]' /></td>
                                  <td className='value last'><input type='radio' className='radio' value='15' id='Price_5' name='ratings[3]' /></td>
                                </tr>
                                <tr className='even'>
                                  <th>Value</th>
                                  <td className='value'><input type='radio' className='radio' value='6' id='Value_1' name='ratings[2]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='7' id='Value_2' name='ratings[2]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='8' id='Value_3' name='ratings[2]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='9' id='Value_4' name='ratings[2]' /></td>
                                  <td className='value last'><input type='radio' className='radio' value='10' id='Value_5' name='ratings[2]' /></td>
                                </tr>
                                <tr className='last odd'>
                                  <th>Quality</th>
                                  <td className='value'><input type='radio' className='radio' value='1' id='Quality_1' name='ratings[1]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='2' id='Quality_2' name='ratings[1]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='3' id='Quality_3' name='ratings[1]' /></td>
                                  <td className='value'><input type='radio' className='radio' value='4' id='Quality_4' name='ratings[1]' /></td>
                                  <td className='value last'><input type='radio' className='radio' value='5' id='Quality_5' name='ratings[1]' /></td>
                                </tr>
                              </tbody>
                            </table>
                            <input type='hidden' value='' className='validate-rating' name='validate_rating' />
                            <div className='review1'>
                              <ul className='form-list'>
                                <li>
                                  <label className='required' htmlFor='nickname_field'>Nickname<em>*</em></label>
                                  <div className='input-box'>
                                    <input type='text' className='input-text required-entry' id='nickname_field' name='nickname' />
                                  </div>
                                </li>
                                <li>
                                  <label className='required' htmlFor='summary_field'>Summary<em>*</em></label>
                                  <div className='input-box'>
                                    <input type='text' className='input-text required-entry' id='summary_field' name='title' />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className='review2'>
                              <ul>
                                <li>
                                  <label className='required label-wide' htmlFor='review_field'>Review<em>*</em></label>
                                  <div className='input-box'>
                                    <textarea className='required-entry' rows='3' cols='5' id='review_field' name='detail'></textarea>
                                  </div>
                                </li>
                              </ul>
                              <div className='buttons-set'>
                                <button className='button submit' title='Submit Review' type='submit'><span>Submit Review</span></button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                    <div className='box-reviews2'>
                      <h3>Customer Reviews</h3>
                      <div className='box visible'>
                        <ul>
                          <li>
                            <table className='ratings-table'>
                              <colgroup>
                              <col width='1' />
                              <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <div className='review'>
                              <h6><a href='#/catalog/product/view/id/61/'>Excellent</a></h6>
                              <small>Review by <span>Leslie Prichard </span>on 1/3/2014 </small>
                              <div className='review-txt'> I have purchased shirts from Minimalism a few times and am never disappointed. The quality is excellent and the shipping is amazing. It seems like it's at your front door the minute you get off your pc. I have received my purchases within two days - amazing.</div>
                            </div>
                          </li>
                          <li className='even'>
                            <table className='ratings-table'>
                              <colgroup>
                              <col width='1' />
                              <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'80%'}}></div>
                                    </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <div className='review'>
                              <h6><a href='#/catalog/product/view/id/60/'>Amazing</a></h6>
                              <small>Review by <span>Sandra Parker</span>on 1/3/2014 </small>
                              <div className='review-txt'> Minimalism is the online ! </div>
                            </div>
                          </li>
                          <li>
                            <table className='ratings-table'>
                              <colgroup>
                              <col width='1' />
                              <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>Value</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Quality</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'100%'}}></div>
                                    </div></td>
                                </tr>
                                <tr>
                                  <th>Price</th>
                                  <td><div className='rating-box'>
                                      <div className='rating' style={{width:'80%'}}></div>
                                    </div></td>
                                </tr>
                              </tbody>
                            </table>
                            <div className='review'>
                              <h6><a href='#/catalog/product/view/id/59/'>Nicely</a></h6>
                              <small>Review by <span>Anthony  Lewis</span>on 1/3/2014 </small>
                              <div className='review-txt'> Unbeatable service and selection. This store has the best business model I have seen on the net. They are true to their word, and go the extra mile for their customers. I felt like a purchasing partner more than a customer. You have a lifetime client in me. </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='actions'> <a className='button view-all' id='revies-button'><span><span>View all</span></span></a> </div>
                    </div>
                    <div className='clear'></div>
                  </div>
                </div>
                <div className='tab-pane fade' id='product_tabs_custom'>
                  <div className='product-tabs-content-inner clearfix'>
                    <p><strong>Lorem Ipsum</strong><span>&nbsp;is
                      simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when 
                      an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the 
                      leap into electronic typesetting, remaining essentially unchanged. It 
                      was popularised in the 1960s with the release of Letraset sheets 
                      containing Lorem Ipsum passages, and more recently with desktop 
                      publishing software like Aldus PageMaker including versions of Lorem 
                      Ipsum.</span></p>
                  </div>
                </div>
                <div className='tab-pane fade' id='product_tabs_custom1'>
                  <div className='product-tabs-content-inner clearfix'>
                    <p> <strong> Comfortable </strong><span>&nbsp;preshrunk shirts. Highest Quality Printing.  6.1 oz. 100% preshrunk heavyweight cotton Shoulder-to-shoulder taping Double-needle sleeves and bottom hem     
                      
                      Lorem Ipsumis
                      simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when 
                      an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the 
                      leap into electronic typesetting, remaining essentially unchanged. It 
                      was popularised in the 1960s with the release of Letraset sheets 
                      containing Lorem Ipsum passages, and more recently with desktop 
                      publishing software like Aldus PageMaker including versions of Lorem 
                      Ipsum.</span></p>
                  </div>
                </div>
              </div>
            </div>

            
        
            {/* <div className='col-sm-12'>
              <div className='box-additional'>
                <div className='upsell-pro wow bounceInUp animated'>
                  <div className='slider-items-products'>
                    <div className='new_title center'>
                      <h2>Upsell Products</h2>
                    </div>
                    <div id='upsell-products-slider' className='product-flexslider hidden-buttons'>
                      <div className='slider-items slider-width-col4'> 
                        

                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        
                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        

                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        

                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        


                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        

                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        


                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        

                        <div className='item'>
                          <div className='item-inner'>
                          <div className='product-block'>
                            <div className='product-image'>
                              <a href=''>
                                <figure className='product-display'>
                                <div className='new-label new-top-left'>New</div>
                                <img src='/products-images/product11.jpg' className='lazyOwl product-mainpic' alt='' style={{display: 'block'}} />
                                <img className='product-secondpic' alt='' src='/products-images/product11.jpg' />
                              </figure>
                              </a>
                            </div>
                            <div className='product-meta'>
                              <div className='product-action'> <a className='addcart'> <i className='icon-shopping-cart'>&nbsp;</i> </a> <a href='quick_view.html' className='quickview'> <i className='icon-zoom'>&nbsp;</i></a> </div>
                            </div>
                          </div>
                          <div className='item-info'>
                            <div className='info-inner'>
                              <div className='item-title'> <a href='' title='Sample Product'>Sample Product</a> </div>
                              <div className='item-content'>
                                <div className='item-price'>
                                  <div className='price-box'>
                                    <p className='old-price'> <span className='price-label'>Regular Price:</span> <span className='price'> $100.00 </span> </p>
                                    <p className='special-price'> <span className='price-label'>Special Price</span> <span className='price' > $90.00 </span> </p>
                                  </div>
                                </div>
                                <div className='rating'>
                                  <div className='ratings'>
                                    <div className='rating-box'>
                                      <div className='rating' style={{width:'0%'}}></div>
                                    </div>
                                    <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Review</a> </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           */}
          </div>
        
      </>
    )
  }
}