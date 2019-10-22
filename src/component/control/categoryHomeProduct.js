import React from 'react'
import ListProductHome from './listProductHome'

export default class CategoryHomeProduct extends React.PureComponent {
  render () {
    const {categoryHomeWithProduct = []} = this.props
    if (categoryHomeWithProduct.length <= 0) return null
    return (
      categoryHomeWithProduct.map((el, k) => {
        return <ListProductHome key={`homecatproduct-${el._id}`} category={el} products={el.products}/>
      })
      
    )
  }
}
