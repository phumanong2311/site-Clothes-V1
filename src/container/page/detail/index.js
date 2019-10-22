import React from 'react'
import formatCurrency from 'format-currency'
import { withContainer } from '../../../context'
import conf from '../../../../config'
import Breadcrumbs from '../../../component/control/breadcrumbs'
import RelatedSlider from '../../../component/control/relatedSlider'
import ProductHotNew from '../../../component/control/productHotNew'
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
      mainImg: '',
      productsHot: [],
      productsNew: [],
      selectSize: null,
      selectColor: null
    }
    this.blockItems = this.blockItems.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
    this.changeMainImg = this.changeMainImg.bind(this)
    this.renderSliderSizeImage = this.renderSliderSizeImage.bind(this)
    this.changeSize = this.changeSize.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  createMarkup (html) {
    return { __html: html }
  }

  changeMainImg (e) {
    const img = e.target.getAttribute('data-img')
    this.setState({mainImg: img}, () => {
      // $('#zoom1').CloudZoom()
    })
  }

  componentDidMount () {
    this.getDetail()
  }

  componentDidUpdate () {
    if (this.props.catId !== this.state.catId || this.props.postlink !== this.state.postlink) {
      this.getDetail()
    }
  }

  getDetail () {
    let {catId, postlink} = this.props
    const arr = postlink.split('-')
    const postId = arr[arr.length - 1]
    this.props.api.detail.get({id: postId}, (err, data) => {
      if (err) return
      const sizeDefault = data.product.size && data.product.size.length > 0 ? data.product.size[0] : null
      const colorDefault = sizeDefault && sizeDefault.colors && sizeDefault.colors.length > 0 ? sizeDefault.colors[0] : null
      this.setState({
        catId: catId,
        category: data.category,
        nav: data.categories,
        postlink: postlink,
        data: data.product,
        productsNew: data.productsNew,
        productsHot: data.productsHot,
        mainImg: data.product.image,
        selectSize: sizeDefault,
        selectColor: colorDefault
      }, () => {
        // $('#zoom1').CloudZoom()
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

  changeSize (k) {
    const state = _.clone(this.state)
    const {data} = state
    const sizeValue = data.size[k]
    this.setState({
      selectSize: sizeValue,
      selectColor: sizeValue.colors && sizeValue.colors.length > 0 ? sizeValue.colors[0] : null
    })
  }

  changeColor (k) {
    const state = _.clone(this.state)
    const {selectSize} = state

    this.setState({
      selectColor: selectSize.colors[k]
    })
  }

  renderSliderSizeImage () {
    const {selectColor} = this.state
    const images = _.get(selectColor, 'images')
    if (!images || images.length <= 0) return null
    return <ul className='previews-list slides'>
      {
        images.map((el, k) => {
          const sliderDetailImages = el.sliderDetailImage ? el.sliderDetailImage : el.mainImage
          return <li key={`image-gallery-${k}`}>
            <a className=''>
              <img width='80px' onClick={this.changeMainImg} data-img={el.mainImage} src={`${domain}/${sliderDetailImages}`} alt = "Thumbnail 1"/>
            </a>
          </li>
        })
      }
    </ul>
  }


  render() {
    const info = this.state.data
    const {productsNew, productsHot, selectSize, selectColor} = this.state
    const mainImg = _.get(this.state, 'mainImg')
    const galleries = _.get(info, 'gallery') || []
    const {categories} = this.props

    const sizes = info && info.size && info.size.length > 0 ? info.size : null
    const colors = selectSize && selectSize.colors && selectSize.colors.length > 0 ? selectSize.colors : null
    return <section className='main-container col1-layout'>
      <div className='main container'>
        <div className='col-main'>
          <div className='row'>
            <div className='product-view'>
              <div className='product-next-prev'>
                <a href='#' className='product-next'><span></span></a>
                <a href='#' className='product-prev'><span></span></a>
              </div>
              <div className='product-essential'>
                <form action='#' method='post' id='product_addtocart_form'>
                  <input name='form_key' defaultValue='6UbXroakyQlbfQzK' type='hidden' />
                  <div className='product-img-box col-lg-4 col-sm-6 col-md-4 col-xs-12 wow bounceInRight animated'>
                    {info && info.isNewProduct && <div className='new-label new-top-left'> New </div>}
                    {info && info.isHot && <div className='sale-label sale-top-right'> Hot </div>}
                    <div className='product-image'>
                      <div className='large-image'>
                        <a href={mainImg ? domain + '/' + mainImg : ''} className='cloud-zoom' id='zoom1' rel='useWrapper: false, adjustY:0, adjustX:20'>
                          {mainImg && <img src={`${domain}/${mainImg}`} alt='' />}
                        </a>
                      </div>
                      <div className='flexslider flexslider-thumb'>

                        {/* <ul className='previews-list slides'>
                          {
                            galleries.map((el, k) => {
                              return <li key={`image-gallery-${k}`}>
                                <a className='cloud-zoom-gallery'>
                                  <img width='80px' onClick={this.changeMainImg} data-img={el} src={`${domain}/${el}`} alt = "Thumbnail 1"/>
                                </a>
                              </li>
                            })
                          }
                        </ul> */}
                        {this.renderSliderSizeImage()}
                      </div>
                    </div>
                    
                    <div className='clear'></div>
                  </div>
                  <div className='product-shop col-lg-5 col-sm-6 col-md-5 col-xs-12 bounceInUp animated'>
                    <div className='product-name'>
                      <h1>{info && info.title}</h1>
                    </div>
                    <div className='ratings'>
                      <div className='rating-box'>
                        <div style={{width:'60%'}} className='rating'></div>
                      </div>
                      <p className='rating-links'> <a href='#'>1 Review(s)</a> <span className='separator'>|</span> <a href='#'>Add Your Review</a> </p>
                    </div>
                    {info && <p className={`availability ${info.inStock ? 'in-stock' : 'out-of-stock'}`}><span>{info.inStock ? 'Còn Hàng' : 'Hết Hàng'}</span></p>}
                    <div className='price-block'>
                      <div className='price-box'>
                        {info && <p className='old-price'> <span className='price-label'>Regular Price:</span> <span id='old-price-48' className= {info && info.priceSale ? 'price' : ''}> {formatCurrency(info.price, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })} </span> </p>}
                        {
                          info && info.priceSale && <p className='special-price'> <span className='price-label'>Special Price</span> <span id='product-price-48' className='price'> {formatCurrency(info.priceSale, { format: '%v %s', symbol: 'đ', minimumFractionDigits: 0 })} </span> </p>
                        }
                      </div>
                    </div>
                 
                    <div className='size-block'>
                      <label>Size: </label>
                      {sizes && sizes.map((el, k) => {
                        if (selectSize.name === el.name) return <span className='size-box-item active' key={`size-${k}`}>{el.name}</span>
                        else return <span onClick={() => this.changeSize(k)} className='size-box-item' key={`size-${k}`}>{el.name}</span>
                      })}
                    </div>

                    <div className='color-block'>
                      <label>Color: </label>
                      {colors && colors.map((el, k) => {
                        let className = selectColor.color === el.color ? 'color-item active' : 'color-item'
                        return <span onClick={() => this.changeColor(k)} className={className} key={`size-${k}`} style={{backgroundColor: el.color}} />
                      })}
                    </div>

                    <div className='short-description'>
                      <h2>Quick Overview</h2>
                      {info && info.description && <p>{info.description}</p>}
                    </div>
                    {/* <div className='add-to-box'>
                      <div className='add-to-cart'>
                        <label htmlFor='qty'>Quantity:</label>
                        <div className='pull-left'>
                          <div className='custom pull-left'>
                            <button onClick='var result = document.getElementById("qty"); var qty = result.value; if( !isNaN( qty )) result.value++;return false;' className='increase items-count' type='button'><i className='icon-plus'>&nbsp;</i></button>
                            <input type='text' className='input-text qty' title='Qty' defaultValue='1' maxLength='12' id='qty' name='qty' />
                            <button onClick='var result = document.getElementById("qty"); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 0 ) result.value--;return false;' className='reduced items-count' type='button'><i className='icon-minus'>&nbsp;</i></button>
                          </div>
                        </div>
                      <div>
                        <button onClick='productAddToCartForm.submit(this)' className='button btn-cart' title='Add to Cart' type='button'><span><i className='icon-basket'></i> Add to Cart</span></button>
                      </div>
                    </div>
                      <div className='email-addto-box'>
                        <ul className='add-to-links'>
                          <li> <a className='link-wishlist' href='wishlist.html'><span>Add to Wishlist</span></a></li>
                          <li><span className='separator'>|</span> <a className='link-compare' href='compare.html'><span>Add to Compare</span></a></li>
                        </ul>
                        <p className='email-friend'><a href='#' className=''><span>Email to a Friend</span></a></p>
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
            {categories && productsNew && productsNew.length && <RelatedSlider info={info} categories={categories} productsNew={productsNew} />}
            {categories && categories.length > 0 && productsHot && productsHot.length > 0 && <ProductHotNew categories={categories} title='Sản Phẩm Hot' id='bag-seller-slider-hot' products={productsHot} />}
          </div>
        </div>
      </div>
    </section>
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
    return <>
        <Breadcrumbs category={category} />
      <Detail api={this.props.api} catId={catId} categories={this.props.categories} category={category} nav={nav} postlink={postlink} />
    </>
  }
}
export default withContainer(Wrapper, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))