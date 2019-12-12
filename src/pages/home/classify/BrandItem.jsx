import React, { Component } from 'react';
import { BrandItemWrap } from "./classifyStyled"
class BrandItem extends Component {
  render() {
    return (
      <BrandItemWrap>
        <div className="img-wrap">
          <img src={this.props.logo} alt=""/>
        </div>
        <p>{this.props.name}</p>
      </BrandItemWrap>
    );
  }
}

export default BrandItem;