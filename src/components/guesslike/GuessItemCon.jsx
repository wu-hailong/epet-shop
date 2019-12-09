import React, { Component } from 'react';

import { ItemConWrap } from "./guessStyled"

class GuessItemCon extends Component {
  render() {
    return (
      <ItemConWrap
        borderWidth="1"
        borderRadius="10"
        borderColor="#eee"
       >
       <img src={this.props.good_image.img_url} alt=""/>
       <div className="content-name">{this.props.subject}</div>
       <div className="content-price">￥<span>{this.props.sale_price}</span></div>
       <div className="interest"></div>
       <div className="add-cart"></div>
      </ItemConWrap>
    )
  }
}

export default GuessItemCon;