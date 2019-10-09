import React from 'react'
import utils from '../../../util'
import { withContainer } from '../../../context'
import conf from '../../../../config'
import LeftSideBar from '../../../component/control/leftSideBar'
import Advertisement from '../../../component/control/advertisement'
const domain = conf.server.domain

class Detail extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      catId: null,
      category: null,
      nav: [],
      postlink: null,
      data: null,
      mainImg: ''
    }
    this.blockItems = this.blockItems.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
    this.changeMainImg = this.changeMainImg.bind(this)
  }

  createMarkup (html) {
    return { __html: html }
  }

  changeMainImg (e) {
    const img = e.target.getAttribute('data-img')
    this.setState({mainImg: img})
  }

  componentDidMount () {
    this.getDetail()
  }

  componentDidUpdate () {
    if (this.props.catId !== this.state.catId || this.props.postlink !== this.state.postlink) {
      // this.getDetail()
    }
  }

  getDetail () {
    let {catId, postlink} = this.props
    const arr = postlink.split('-')
    const postId = arr[arr.length - 1]
    this.props.api.detail.get({id: postId}, (err, data) => {
      console.log('er111r, data', err, data)
      if (err) return
      this.setState({
        catId: catId,
        category: data.category,
        nav: data.categories,
        postlink: postlink,
        data: data.product,
        mainImg: data.product.image
      })
    })
  }

  blockItems (key, items, active) {
    return (
      <div key={key} className={`item ${active}`}>
        {items}
      </div>
    )
  }


  render() {
    const data = this.state
    const info = this.state.data
    const mainImg = _.get(this.state, 'mainImg')
    const galleries = _.get(info, 'gallery') || []
    let items = {}
    galleries.forEach((el, k) => {
      const number = k + 1
      const keyItems = 'key-' + Math.ceil(number/3)
      if (keyItems in items) {
        items[keyItems].push(<img key={el._id} onClick={this.changeMainImg} data-img={`${el}`} src={`${domain}/${el}`} alt='' />)
      } else {
        items[keyItems] = []
        items[keyItems].push(<img key={el._id} onClick={this.changeMainImg} data-img={`${el}`} src={`${domain}/${el}`} alt='' />)
      }
    })
    return (
      <>
        <div className='product-details'>
          <div className='col-sm-5'>
              <div className='view-product'>
                {mainImg && <img src={`${domain}/${mainImg}`} alt='' />}
                {info && info.isHot &&<h3>HOT</h3>}
              </div>
              <div id='similar-product' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner'>
                    {Object.keys(items).map((el, k) => this.blockItems(el, items[el], k === 0 ? 'active' : ''))}
                  </div>
                  <a className='left item-control' href='#similar-product' data-slide='prev'>
                  <i className='fa fa-angle-left'></i>
                  </a>
                  <a className='right item-control' href='#similar-product' data-slide='next'>
                  <i className='fa fa-angle-right'></i>
                  </a>
              </div>

            </div>
          
          <div className='col-sm-7'>
            <div className='product-information'>
              {info && info.isNewProduct && <img src='/images/product-details/new.jpg' className='newarrival' alt='' />}
              <h2>{info && info.title}</h2>
              <p>Web ID: {info && info.code}</p>
              <div><img src='/images/product-details/rating.png' alt='' /></div>
              <span>
                <span>US ${info && info.price}</span>
                {/* <label>Quantity:</label> */}
                {/* <input type='text' defaultValue='3' />
                <button type='button' className='btn btn-fefault cart'>
                  <i className='fa fa-shopping-cart'></i>
                  Add to cart
                </button> */}
              </span>
              <p><b>Availability:</b> In Stock</p>
              <p><b>Condition:</b> New</p>
              <p><b>Brand:</b> E-SHOPPER</p>
              <a href=''><img src='/images/product-details/share.png'  className='share img-responsive'  alt='' /></a>
            </div>
          </div>
        </div>

        <div className='category-tab shop-details-tab'>
          <div className='col-sm-12'>
            <ul className='nav nav-tabs'>
              <li  className='active'><a href='#reviews' data-toggle='tab'>Details</a></li>
              {/* <li><a href='#companyprofile' data-toggle='tab'>Company Profile</a></li> */}
              <li><a href='#tag' data-toggle='tab'>Tag</a></li>
              {/* <li><a href='#details' data-toggle='tab'>Reviews (5)</a></li> */}
            </ul>
          </div>
        
          <div className='tab-content'>
            
          <div className='tab-pane fade active in' id='reviews' >
              <div className='col-sm-12'>
                <ul>
                  <li><a href=''><i className='fa fa-user'></i>EUGEN</a></li>
                  <li><a href=''><i className='fa fa-clock-o'></i>{info && utils.getTime(info.createDate)}</a></li>
                  <li><a href=''><i className='fa fa-calendar-o'></i>{info && utils.formatDateToString(info.createDate)}</a></li>
                </ul>
                <p>{info && info.description}</p>
                <p><b>Write Your Review</b></p>
                {info && <div dangerouslySetInnerHTML={{__html: info.content}}></div>}
                
              </div>
            </div>
 
          </div>
        
        </div>
      </>
    )
  }
}

class Wrapper extends React.PureComponent {
  render () {
    const {categories} = this.props
    let category = null
    let nav = []
    let {catId, postlink} = this.props.match.params

    if (categories && categories.length > 0) {
      category = categories.find(el => el.link === catId)
      const parentId = category.parentId ? category.parentId : category._id
      nav = categories.filter(el => el.parentId === parentId)
    }
    return (
      <>
        <Advertisement />
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <LeftSideBar categories={categories || []} />
              </div>

              <div className='col-sm-9'>
                <Detail api={this.props.api} catId={catId} categories={this.props.categories} category={category} nav={nav} postlink={postlink} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default withContainer(Wrapper, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))