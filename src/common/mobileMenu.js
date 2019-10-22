import React from 'react'

export default class MobileMenu extends React.PureComponent {

  componentDidMount () {
    this.loadMenuMb()
  }

  componentDidUpdate () {
    this.loadMenuMb()
  }

  loadMenuMb () {
    $(function () {
      jQuery("#mobile-menu").mobileMenu({
        MenuWidth: 250,
        SlideSpeed: 300,
        WindowsMaxWidth: 767,
        PagePush: !0,
        FromLeft: !0,
        Overlay: !0,
        CollapseMenu: !0,
        ClassName: "mobile-menu"
      })
    })
  }
  render () {
    const {categories} = this.props
    const parent = categories.filter(el => !el.parentId)
    return <div id='mobile-menu'>
      <ul>
        <li>
          <div className='mm-search'>
            <form id='search' name='search'>
              <div className='input-group'>
                <div className='input-group-btn'>
                  <button className='btn btn-default' type='submit'><i className='icon-search'></i></button>
                </div>
                <input type='text' className='form-control simple' placeholder='Search ...' name='srch-term' id='srch-term' />
              </div>
            </form>
          </div>
        </li>
        <li>
          <div className='home'> <a href='/'><i className='icon-home'></i>Home</a> </div>
        </li>
        
        {parent.map((el, i) => {
          const children = categories.filter(e => e.parentId === el._id)
          if (children.length > 0) {
            return <li key={el._id}><a href={`/${el.link}`}>{el.title}</a>
              <ul>
                {children.map((child, i) => {
                  return <li key={`child-${child._id}`}><a href={`/${child.link}`}>{child.title} </a></li>
                })}
              </ul>
            </li>
          } else {
            return <li key={el._id}><a href={`/${el.link}`}>{el.title}</a> </li>
          }
        })}
      </ul>
    </div>
  }
}