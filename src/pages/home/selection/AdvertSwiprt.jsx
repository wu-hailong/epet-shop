import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import {AdvertSwiperWrap} from "./stlyleSelection"
class AdvertSwiprt extends Component {
  state={
    imgHeight:160
  }
  render() {

    return (
      <AdvertSwiperWrap>
        {
          this.props.images ? (
            <>
               <Carousel
                  autoplay={true}
                  infinite
                  >
                  {this.props.images.map(item => (
                    <a
                      key={item.img_url}
                      href="##"
                      style={{height:this.state.imgHeight}}
                    >
                      <img
                        src={item.img_url}
                        alt=""
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
            </>
          ):null
        }
      </AdvertSwiperWrap>
    );
  }
}

export default AdvertSwiprt;