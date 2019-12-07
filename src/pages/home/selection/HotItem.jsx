import React, { Component } from 'react';
import { HotItemWrap } from "./stlyleSelection"
class HotItem extends Component {
  render() {
    // console.log(this.props)
    return (
        <HotItemWrap>
          { this.props.item ? (
            <>      
              <img src={this.props.item.image.img_url} alt=""/>
              <p className="new-price">￥<span>{this.props.item.sale_price}</span></p>
              <p className="old-price">￥<span>{this.props.item.little_price}</span></p>
              {
                this.props.item.discount_img ? (
                  <>
                    <div className="discount">
                      <img src={this.props.item.discount_img.img_url} alt=""/>
                    </div>
                  </>):null
              }
            </>):null
          }
        </HotItemWrap>
    );
  }
}

export default HotItem;