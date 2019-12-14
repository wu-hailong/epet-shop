import React, { Component } from 'react';
import CommonHeader from "components/header/CommonHeader"
import { SearchArticleWrap } from "./searchStyled"
class SearchArticle extends Component {
  render() {
    return (
      <SearchArticleWrap>
        <CommonHeader>搜索</CommonHeader>
        <div className="search">
          <div>
            <i></i>
            <input type="text" placeholder="请输入搜索内容"/>
          </div>
          <div>取消</div>
        </div>
        <div className="search-history">
            <div>
              <h3>最近搜索</h3>
            </div>
            <div>
              <span>哈斯回去</span>
            </div>
        </div>
      </SearchArticleWrap>
    );
  }
}

export default SearchArticle;