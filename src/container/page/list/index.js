import React from 'react'
import queryString from 'query-string'
import { withContainer } from '../../../context'
import Advertisement from '../../../component/control/advertisement'
import LeftSideBar from '../../../component/control/leftSideBar'
import FeatureItems from '../../../component/control/featureItems'


class Content extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      nav: [],
      category: null,
      page: null,
      pageSize: 32,
      catId: null,
      total: null
    }
    this.page = this.props.page
    this.catId = this.props.match.params.catId
    this.getList = this.getList.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.onChangePaging = this.onChangePaging.bind(this)
  }

  componentDidMount () {
    let {page} = this.props
    this.getList(page)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.catId !== this.state.catId || this.props.page !== this.state.page) {
      this.getList(this.props.page)
    }
  }

  nextPage () {
    let {page} = this.props
    let {catId} = this.props.match.params
    this.props.history.push(`/${catId}?page=${parseInt(page) + 1}`)
    this.getList(parseInt(page) + 1)
  }

  prevPage () {
    let {page, catId} = this.props
    this.props.history.push(`/${catId}?page=${parseInt(page) - 1}`)
    this.getList(parseInt(page) - 1)
  }

  onChangePaging (e) {
    let {catId} = this.props
    const page = e.currentTarget.getAttribute('data-page')

    this.props.history.push(`/${catId}?page=${parseInt(page)}`)
    this.getList(parseInt(page))
  }

  getList (page) {
    let {catId} = this.props
    if (!catId) return
    this.props.api.list.list({qcat: catId, page: page || 1, pageSize: this.state.pageSize}, (err, resp) => {
      if (err) return
      this.setState({total: resp.total, products: resp.products, nav: resp.categories, category: resp.category, page: page, catId: catId})
    })
  }

  render () {
    const {products = []} = this.state
    const {categories = []} = this.props
    return <>
      <Advertisement />
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <LeftSideBar categories={categories || []} />
            </div>

            <div className='col-sm-9'>
              <FeatureItems categories={categories || []} isPaging page={this.props.page} pageSize={this.state.pageSize} total={this.state.total} catId={this.props.catId} products={products} onChangePaging={this.onChangePaging}/>
            </div>
          </div>
        </div>
      </section>
    </>
  }
}


class List extends React.PureComponent {
  render () {
    let {catId} = this.props.match.params
    const {categories} = this.props
    let category = null
    let nav = []
    if (categories && categories.length > 0) {
      category = categories.find(el => el.link === catId)
      const parentId = category.parentId ? category.parentId : category._id
      nav = categories.filter(el => el.parentId === parentId)
    }
    const parsed = queryString.parse(this.props.location.search)
    let {page} = parsed
    return <Content page={page ? parseInt(page) : 1} categories={this.props.categories || []} category={category} nav={nav} catId={this.props.match.params.catId} {...this.props} />
  }
}

export default withContainer(List, (c, props) => ({
  api: c.api,
  categories: c.data.categories
}))
