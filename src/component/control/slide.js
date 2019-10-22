import React from 'react'
import conf from '../../../config'

const domain = conf.server.domain

class Slide extends React.PureComponent {

  componentDidMount () {
    this.loadSlider()
  }

  componentDidUpdate () {
    this.loadSlider()
  }
  
  loadSlider () {
    $(function () {
      jQuery(document).ready(function(){
        jQuery('#rev_slider_4').show().revolution({
          dottedOverlay: 'none',
          delay: 5000,
          startwidth: 1180,
          startheight: 680,
          
          hideThumbs: 200,
          thumbWidth: 200,
          thumbHeight: 50,
          thumbAmount: 2,
          
          navigationType: 'thumb',
          navigationArrows: 'solo',
          navigationStyle: 'round',
          
          touchenabled: 'on',
          onHoverStop: 'on',
          
          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,
          
          spinner: 'spinner0',
          keyboardNavigation: 'off',
          
          navigationHAlign: 'center',
          navigationVAlign: 'bottom',
          navigationHOffset: 0,
          navigationVOffset: 20,
          
          soloArrowLeftHalign: 'left',
          soloArrowLeftValign: 'center',
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,
          
          soloArrowRightHalign: 'right',
          soloArrowRightValign: 'center',
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,
          
          shadow: 0,
          fullWidth: 'on',
          fullScreen: 'off',
          
          stopLoop: 'off',
          stopAfterLoops: -1,
          stopAtSlide: -1,
          
          shuffle: 'off',
          
          autoHeight: 'off',
          forceFullWidth: 'on',
          fullScreenAlignForce: 'off',
          minFullScreenHeight: 0,
          hideNavDelayOnMobile: 1500,
          
          hideThumbsOnMobile: 'off',
          hideBulletsOnMobile: 'off',
          hideArrowsOnMobile: 'off',
          hideThumbsUnderResolution: 0,
          
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          fullScreenOffsetContainer: ''
        });
      });
    })
  }

  render () {
    const {slides} = this.props
    return (
      <div id='magik-slideshow' className='magik-slideshow'>
        <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container' >
          <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
            <ul>
              {slides.map(el => {
                const imgSlide = domain + el.image
                return <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb=''>
                  <img src={imgSlide}  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat'  alt={el.altImage} />
                  <div
                    className='tp-caption LargeTitle sfl  tp-resizeme' 
                    data-x='45'  data-y='200'  data-endspeed='500'
                    data-speed='500' data-start='1300'
                    data-easing='Linear.easeNone'
                    data-splitin='none'
                    data-splitout='none'
                    data-elementdelay='0.1'
                    data-endelementdelay='0.1'
                    style={{ zIndex: '3', whiteSpace: 'nowrap' }}>
                      {el.title}
                  </div>
                  <div
                    className='tp-caption LargeTitle sfl  tp-resizeme'
                    data-x='45' 
                    data-y='270' 
                    data-endspeed='500'
                    data-speed='500'
                    data-start='1300'
                    data-easing='Linear.easeNone'
                    data-splitin='none'
                    data-splitout='none'
                    data-elementdelay='0.1'
                    data-endelementdelay='0.1'
                    style={{ zIndex: '3', whiteSpace: 'nowrap' }}>{el.subTitle}</div>
                  <div className='tp-caption sfb  tp-resizeme' data-x='45'  data-y='470'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>
                    <a href={`/${el.link}`} className='view-more'>View More</a>
                    {/* <a href='#' className='buy-btn'>Buy Now</a> */}
                  </div>
                  <div className='tp-caption Title sft  tp-resizeme' data-x='45'  data-y='390'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>
                    {el.description}
                  </div>
                </li>
              })}

              {/* <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb=''>
                <img src='/images/slide-img1.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat'  alt='' />
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='200'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>Super</div>
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='270'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>Performance</div>
                <div className='tp-caption sfb  tp-resizeme' data-x='45'  data-y='470'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>
                  <a href='#' className='view-more'>View More</a>
                  <a href='#' className='buy-btn'>Buy Now</a>
                </div>
                <div className='tp-caption Title sft  tp-resizeme' data-x='45'  data-y='390'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>In augue urna, nunc, tincidunt, augue,<br />
                  augue facilisis facilisis.</div>
              </li>
              <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb=''>
                <img src='images/slide-img2.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat'  alt='' />
                <div className='tp-caption LargeTitle sfl  tp-resizeme' data-x='45'  data-y='140'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '3', whiteSpace: 'nowrap' }}>New Jewelry</div>
                <div    className='tp-caption sfb  tp-resizeme' data-x='45'  data-y='360'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}><a href='#' className='view-more'>View More</a><a href='#' className='buy-btn'>Buy Now</a></div>
                <div className='tp-caption Title sft  tp-resizeme' data-x='45'  data-y='250'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{ zIndex: '4', whiteSpace: 'nowrap' }}>In augue urna, nunc, tincidunt, augue,<br />
                  augue facilisis facilisis.</div>
              </li> */}
            </ul>
            <div className='tp-bannertimer' />
          </div>
        </div>
      </div>
    )
  }
}
export default Slide