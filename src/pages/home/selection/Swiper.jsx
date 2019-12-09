import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

//
import { SlideWrap,SwiperWrap } from "./stlyleSelection"
class Swiper extends Component {
  state = {
    data: [
      'https://img2.epetbar.com/2019-12/02/16/54db3b78f2fc1e336ed67fdd771f6f0e.jpg?x-oss-process=style/water',
      'https://img2.epetbar.com/2019-12/04/14/1e6f687ffc01a308f3cdd06fd121a6d6.jpg?x-oss-process=style/water', 
      'https://img2.epetbar.com/2019-12/02/18/78796b87855463c0619567d6393ea9c8.png?x-oss-process=style/water'
    ],
    imgHeight:290
  }
  render() {
    return (
      <SwiperWrap>

        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <SlideWrap
              key={val}
              href={val}
              style={{height:this.state.imgHeight}}
            >
              <img
                src={val}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </SlideWrap>
          ))}
        </Carousel>
      </SwiperWrap>
    );
  }
}



export default Swiper;