import React from 'react'

export default class MobileMenu extends React.PureComponent {
  render () {
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
          <div className='home'> <a href='index.html'><i className='icon-home'></i>Home</a> </div>
        </li>
        <li><a href='#'>Pages </a> 
        <ul>
          <li><a href='#'>Pages </a></li>
          <li><a href='#'>Pages </a></li>
          <li><a href='#'>Pages </a></li>
          <li><a href='#'>Pages </a></li>
        </ul>
      </li>
        <li><a href='#'>Kids</a> </li>
        <li><a href='contact_us.html'>Contact Us</a> </li>
      </ul>
    </div>
  }
}