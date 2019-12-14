import React, { Component } from 'react';
import {HeaderWrap , HeaderMenuWrap} from "../styled/commonStyled"
import { withRouter } from "react-router-dom"
@withRouter
class CommonHeader extends Component {
  state = {
    menuHeight:"0px"
  }
  goBack = ()=>{
    this.props.history.goBack()
  }
  handleClick = ()=>{
    if(this.state.menuHeight === "0px"){
      this.setState({
        menuHeight:"65px"
      })
      }else{
        this.setState({
        menuHeight:"0px"
      })
    }
  }
  render() {
    return (
      <>
        <HeaderWrap
         borderWidth="0 0 1px 0"
         borderColor="#e5e5e5"
        >
          <div onClick={this.goBack}></div>
          <div>{this.props.children}</div>
          <div onClick={this.handleClick}></div>
        </HeaderWrap>
        <HeaderMenuWrap
         height={this.state.menuHeight}
        >
          <div><div></div><p>首页</p></div>
          <div><div></div><p>商品分类</p></div>
          <div><div></div><p>购物车</p></div>
          <div><div></div><p>我的e宠</p></div>
        </HeaderMenuWrap>       
      </>

    );
  }
}

export default CommonHeader;