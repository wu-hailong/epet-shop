import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
class AdvertSwiprt extends Component {
  state = {
    data: [
      'https://img2.epetbar.com/2019-12/06/15/6ab0bc06f1f3ba7caf9cb70b875e17a5.png?x-oss-process=style/water',
      'https://img2.epetbar.com/2019-12/05/15/fcdc41b6ed9cb52e0ccb341231b13b03.png?x-oss-process=style/water', 
      'https://img2.epetbar.com/2019-12/04/14/deb5076f8987dfb3698c0acf16d756fc.png?x-oss-process=style/water'],
  }
  render() {
    return (
      <Carousel
      autoplay={true}
      infinite
    >
      {this.state.data.map(val => (
        <a
          key={val}
          href={val}
          style={{width:"3.75rem"}}
        >
          <img
            src={val}
            alt=""
            style={{width:"3.75rem"}}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
      ))}
    </Carousel>
    );
  }
}

export default AdvertSwiprt;