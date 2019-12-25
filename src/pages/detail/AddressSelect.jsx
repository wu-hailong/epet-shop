import React, { Component } from 'react';
import { AddressSelectWrap } from "./detailStyled"
class AddressSelect extends Component {
  render() {
    return (
      <AddressSelectWrap>
        <div>
          <div>送至</div>
          <img src="https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/dress.png" alt=""/>
          <div>重庆 渝中区</div>
          <span>E宠西部中央仓</span>
        </div>
        <div>
          <div><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""/>正品保证</div>
          <div><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""/>正品保证</div>
          <div><img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" alt=""/>正品保证</div>
        </div>
      </AddressSelectWrap>
    );
  }
}

export default AddressSelect