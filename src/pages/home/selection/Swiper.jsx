import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

//
import { SwiperWrap } from "./stlyleSelection"
class Swiper extends Component {
  state = {
    list:[]
  }
  render() {
    let { swiperList } = this.props
    return (
      <SwiperWrap>

        <Carousel
          autoplay={true}
          infinite
          dotStyle={
            {
              width:"6px",
              height:"6px", 
              border: "1px solid #fff",
              background: "transparent",
              opacity: .9,
              margin: "1px 4px",
              borderRadius:"6px",
              transition: "all 0.25s ease"
            }
          }
          dotActiveStyle={
            {
              width:"16px",
              height:"6px",
              background:"#fff",
              margin: "1px 4px",
              borderRadius:"6px",
              transition: "all 0.25s ease"
            }
          }
        >
          { swiperList &&
            Object.keys(swiperList).map(key =>{
              return (  
                  <img
                    key={swiperList[key].advid}
                    src={swiperList[key].img_url}
                    alt=""
                  />
              )
            })
          }
        </Carousel>
      </SwiperWrap>
    );
  }
}



export default Swiper;