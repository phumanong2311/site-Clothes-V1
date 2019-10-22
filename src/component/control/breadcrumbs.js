import React from 'react'
import _ from 'lodash'

export default class Breadcrumbs extends React.PureComponent {
  render () {
    const {category} = this.props
    return (
      <div className='breadcrumbs'>
        <div className='container'>
          <div className='row'>
            <ul>
              <li className='home'><a href='/' title='Go to Home Page'>Home</a><span>&mdash;›</span></li>
              <li className=''><a href={`/${_.get(category, 'link')}`} title='Go to Home Page'>{_.get(category, 'title')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}