import React from 'react'
import Slide from '../../../component/control/slide'
import OfferBannerInner from '../../../component/control/offerBannerInner'
import ProductHotNew from '../../../component/control/productHotNew'
import OfferBanner from '../../../component/control/offerBanner'
import PromoBanner from '../../../component/control/PromoBanner'
import BrandLogo from '../../../component/control/brandLogo'
import OurFearturesBox from '../../../component/control/ourFeaturesBox'
import CategoryHomeProduct from '../../../component/control/categoryHomeProduct'

import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    const { productsHot, productsNew, categories, categoryHomeWithProduct, galleries, slides } = this.props
    console.log('slides', slides)
    return (
      <React.Fragment>
        {slides && slides.length > 0 && <Slide slides={slides} />}
        <OfferBannerInner />
        {productsHot && productsHot.length > 0 && categories.length > 0 && <ProductHotNew categories={categories} title='Sản Phẩm HOT' id='bag-seller-slider-hot' products={productsHot} />}
        {productsNew && productsNew.length > 0 && categories.length > 0 && <ProductHotNew categories={categories} title='Sản Phẩm Mới' id='bag-seller-slider-new' products={productsNew} />}
        <OfferBanner />
        
        {categoryHomeWithProduct && categoryHomeWithProduct.length > 0 && <CategoryHomeProduct categoryHomeWithProduct={categoryHomeWithProduct} />}
        {/* <ListProductHome products={productsNew} /> */}
        <PromoBanner />
        {galleries && galleries.length > 0 && <BrandLogo galleries={galleries} />}
        <OurFearturesBox />
      </React.Fragment>
    )
  }
}

export default withContainer(HomePage, (c, props) => ({
  api: c.api,
  galleries: c.data.galleries || [],
  categories: c.data.categories || [],
  productsNew: c.data.productsNew || [],
  productsHot: c.data.productsHot || [],
  categoryHomeWithProduct: c.data.categoryHomeWithProduct || [],
  slides: c.data.slides || []
}))
