import React from 'react'

class Slide extends React.PureComponent {
  render() {
    return(
      <div id='magik-slideshow' className='magik-slideshow'>
        <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container' >
          <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
            <ul>
              <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb=''>
                <img src='images/slide-img1.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat'  alt='' />
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='200'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>Super</div>
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='270'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>Performance</div>
                <div className='tp-caption sfb  tp-resizeme' data-x='45'  data-y='470'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}><a href='#' className='view-more'>View More</a><a href='#' className='buy-btn'>Buy Now</a></div>
                <div className='tp-caption Title sft  tp-resizeme' data-x='45'  data-y='390'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>In augue urna, nunc, tincidunt, augue,<br />
                  augue facilisis facilisis.</div>
              </li>
              <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb=''><img src='images/slide-img2.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat'  alt='' />
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='140'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>New Jewelry</div>
                <div    className='tp-caption sfb  tp-resizeme' data-x='45'  data-y='360'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}><a href='#' className='view-more'>View More</a><a href='#' className='buy-btn'>Buy Now</a></div>
                <div className='tp-caption Title sft  tp-resizeme' data-x='45'  data-y='250'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>In augue urna, nunc, tincidunt, augue,<br />
                  augue facilisis facilisis.</div>
              </li>
            </ul>
            <div className='tp-bannertimer' />
          </div>
        </div>
      </div>
    )
  }
}
export default Slide