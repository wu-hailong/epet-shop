import React, { Component } from 'react';

import { FooterWrap } from "./stlyleSelection"

class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <div>
          <span>触屏版</span>
          <a href="##">手机客户端</a>
          <a href="##">关于我们</a>
          <a href="##">联系我们</a>
        </div>
        <div>&copy; wap.epet.com 版权：重庆易宠科技有限公司</div>
      </FooterWrap>
    );
  }
}

export default Footer;