import React, { Component } from 'react';

import { HeaderWrap } from "./classifyStyled"

class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <div><span className="active">分类</span></div>
        <div><span>品牌</span></div>
      </HeaderWrap>
    );
  }
}

export default Header;