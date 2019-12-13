import React, { Component } from 'react';

import { HeaderWrap } from "./classifyStyled"
import searchIco from "assets/images/search-btn.png"
import { withRouter } from "react-router-dom"

@withRouter
class Header extends Component {
  state={
    type : "category"
  }
  handleClick = (type)=>{
    return ()=>{
      this.setState({
        type
      })
      this.props.history.push(`/${type}`)
    }
  }
  render() {
      return (
            <HeaderWrap>
              <div><span className={this.state.type ==="category" ? "active" : ""} onClick={this.handleClick("category")}>分类</span></div>
              <div><span className={this.state.type ==="brand" ? "active" : "" } onClick={this.handleClick("brand")}>品牌</span></div>
              <img src={searchIco} alt=""/>
            </HeaderWrap>
          )
  }
}

export default Header;