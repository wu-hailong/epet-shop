import React, { Component } from 'react';
import { NavBarWrap } from "./listStyled"
class NavBar extends Component {
  render() {
    return (
      <NavBarWrap
        borderWidth="1px 0 0 0"
        borderColor="#e7e7e7"
      >
        <li>默认</li>
        <li>销量</li>
        <li>价格</li>
        <li>筛选</li>
      </NavBarWrap>
    );
  }
}

export default NavBar;