import React, { Component } from 'react';
import { SearchWrap } from "../styled/commonStyled"
import searchIco from "assets/images/search-btn.png"
import { withRouter } from "react-router-dom"

@withRouter
class Search extends Component {
  goSearch =()=>{
    this.props.history.push({
      pathname:"/search",
      state:this.props.searchType
    })
  }
  render() {
    // console.log(this.props.searchType)
    return (
      <SearchWrap
      {...this.props}
      >
        <div className="search"
        onClick = {this.goSearch}
        >
            <img src={searchIco} alt=""/>
            <span>请输入搜索内容</span>
        </div>
        <div className="msg"></div>
      </SearchWrap>
    );
  }
}

export default Search;