import React, { Component } from 'react';
import { SearchWrap } from "../styled/commonStyled"
import searchIco from "assets/images/search-btn.png"
class Search extends Component {
  render() {
    return (
      <SearchWrap
      {...this.props}
      >
        <div className="search">
            <img src={searchIco} alt=""/>
            <span>请输入搜索内容</span>
        </div>
        <div className="msg"></div>
      </SearchWrap>
    );
  }
}

export default Search;