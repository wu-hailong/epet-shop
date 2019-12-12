import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import {AdvertSwiperWrap} from "./stlyleSelection"
class AdvertSwiprt extends Component {

  render() {
    // console.log(this.props)
    return (
      <AdvertSwiperWrap
      >
        {
          this.props.images && (
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
                  {this.props.images.map(item => (
                      <img key={item.img_url} src={item.img_url} alt="" />
                  ))}
                </Carousel>)
        }
      </AdvertSwiperWrap>
    );
  }
}

export default AdvertSwiprt;