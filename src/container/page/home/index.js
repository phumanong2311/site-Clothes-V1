import React from 'react'
import Slide from '../../../component/control/slide'
import OfferBannerInner from '../../../component/control/offerBannerInner'
import ProductHotNew from '../../../component/control/productHotNew'
import OfferBanner from '../../../component/control/offerBanner'
import ListProductHome from '../../../component/control/listProductHome'
import PromoBanner from '../../../component/control/PromoBanner'
import BrandLogo from '../../../component/control/brandLogo'
import OurFearturesBox from '../../../component/control/ourFeaturesBox'

import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    return (
      <React.Fragment>
        <Slide />
        <OfferBannerInner />
        <ProductHotNew />
        <ProductHotNew />
        <OfferBanner />
        <ListProductHome />
        <ListProductHome />
        <PromoBanner />
        <BrandLogo />
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
  categoryHomeWithProduct: c.data.categoryHomeWithProduct || []
}))
