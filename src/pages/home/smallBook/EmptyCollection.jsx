import React, { Component } from 'react';
import ico404 from "assets/images/404.png"
import { EmptyCollectionWrap } from "./smallBookStyled"

class EmptyCollection extends Component {
  render() {
    return (
      <EmptyCollectionWrap
        background={ico404}
      >
        <div></div>
        <h3>暂无内容</h3>
        <p>小主，登录后才可查看哦～</p>
        <div className="login-btn">立即登录</div>
      </EmptyCollectionWrap>
    );
  }
}

export default EmptyCollection;