import React from 'react'
import _ from 'lodash'
import formatCurrency from 'format-currency'
import conf from '../../../config'
import Paging from './paging'

const domain = conf.server.domain

class ListProduct extends React.PureComponent {
	render () {
	  const {category, categories = [], products, page, isPaging, pageSize, total, onChangePaging} = this.props
		return <section className='col-main col-sm-12 wow bounceInUp animated'>
			<div className='category-title'>
				<h1>{_.get(category, 'title')}</h1>
			</div>
			<div className='category-products'>
				
				<ul className='products-grid'>
          {
            products.map((el, k) => {
              const cat = categories.find(c => c._id === el.categoryId)
              const link = _.get(cat, 'link')
              const linkDetail = `/${link}/${el.link}-${el._id}`
              return <li key={el._id} className='item col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div className='item-inner'>
                <div className='product-block'>
                  <div className='product-image'>
                    <a href={linkDetail}>
                      <figure className='product-display'>
                        <div className='sale-label sale-top-left'>Sale</div>
                        <img src={domain + el.image} className='lazyOwl product-mainpic' alt='' style={{ display: 'block' }} />
                        <img className='product-secondpic' alt='' src={domain + el.image} width='258' />
                      </figure>
                    </a>
                  </div>
                  <div className='product-meta'>
                    <div className='product-action'>
                      <a className='addcart' href='#'>
                        <i className='icon-shopping-cart'>&nbsp;</i> Add to cart
                      </a>
                      <a href={linkDetail} className='quickview'><i className='icon-zoom'>&nbsp;</i>Xem</a>
                    </div>
                  </div>
                </div>
                <div className='item-info'>
                  <div className='info-inner'>
                    <div className='item-title'><a href='#' title='Sample Product'>{el.title}</a></div>
                    <div className='item-content'>
                      <div className='item-price'>
                        <div className='price-box'>
                          {el && <p className='old-price'> <span className='price-label'>Regular Price:</span> <span id='old-price-48' className= {el && el.priceSale ? 'price' : ''}> {formatCurrency(el.price, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })} </span> </p>}
                          {
                            el && el.priceSale && <p className='special-price'> <span className='price-label'>Special Price</span> <span id='product-price-48' className='price'> {formatCurrency(el.priceSale, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })} </span> </p>
                          }
                        </div>
                      </div>
                      <div className='rating'>
                        <div className='ratings'>
                          <div className='rating-box'>
                            <div className='rating' style={{ width: '80%' }}></div>
                          </div>
                          <p className='rating-links'><a href='#'>1 Review(s)</a><span className='separator'>|</span><a href='#'>Add Review</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            })
          }
					
				</ul>
        <div className='toolbar'>
        {isPaging && total > 0 && <div className='col-sm-12'><Paging page={page} total={total} pageSize={pageSize} changePage={onChangePaging} /></div>}
				</div>
			</div>
		</section>
	}
}
export default ListProduct