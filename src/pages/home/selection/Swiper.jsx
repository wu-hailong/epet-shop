import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

//
import { SlideWrap,SwiperWrap } from "./stlyleSelection"
class Swiper extends Component {
  state = {
    imgHeight:290,
    list:[]
  }
  render() {
    let { swiperList } = this.props
    return (
      <SwiperWrap>

        <Carousel
          autoplay={true}
          infinite
        >
          {
            Object.keys(swiperList).map(key =>{
              return (
                <SlideWrap
                  key={swiperList[key].advid}
                  href="##"
                  style={{height:this.state.imgHeight}}
                 >
                  <img
                    src={swiperList[key].img_url}
                    alt=""
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </SlideWrap>
              )
            })
          }
        </Carousel>
      </SwiperWrap>
    );
  }
}



export default Swiper;