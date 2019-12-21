import React, { Component } from 'react';
import CommonHeader from "components/header/CommonHeader"
import { SearchArticleWrap } from "./searchStyled"
import { withRouter} from "react-router-dom"
@withRouter
class SearchArticle extends Component {

  handleKeyDown=(e)=>{
    if(e.keyCode === 13){
      let { value:word } = this.refs.inputValue
      this.props.history.push({
        pathname:"/articleList",
        state:{
          word
        }
      })
     }
  }
  render() {
    return (
      <SearchArticleWrap>
        <CommonHeader>搜索</CommonHeader>
        <div className="search">
          <div>
            <i></i>
            <input type="text" ref="inputValue" onKeyDown={this.handleKeyDown} placeholder="请输入搜索内容" autoFocus/>
          </div>
          <div>取消</div>
        </div>
        <div className="search-history">
            <div>
              <h3>最近搜索</h3>
            </div>
            <div>
              <span>哈士奇</span>
            </div>
        </div>
      </SearchArticleWrap>
    );
  }
}

export default SearchArticle;