import React, { Component } from 'react';
import { TopSearchWrap } from "./stlyleSelection"
import searchIco from "assets/images/search-btn.png"
class TopSearch extends Component {
  render() {
    return (
      <TopSearchWrap>
        <div className="search">
            <img src={searchIco} alt=""/>
            <span>请输入搜索内容</span>
        </div>
        <div className="msg"></div>
      </TopSearchWrap>
    );
  }
}

export default TopSearch;