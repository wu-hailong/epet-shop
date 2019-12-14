import React, { Component } from 'react';

import { SearchGoodsWrap , TitleWrap , HotWrap , RecentlyWrap } from "./searchStyled"
import hotIco from "assets/images/hot.png"
import recentlyIco from "assets/images/recently.png"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"
@withRouter
class SearchGoods extends Component {
  goBack=()=>{
    this.props.history.goBack()
  }
  async componentDidMount(){
    let result = await get({
      url:"v3/goodslist.html",
      params:{
        callback: "jQuery17105462217644335665_1576328371038",
        do: "getHotKeys",
        system: "wap",
        isWeb: 1,
        version: 340,
        distinct_id:" æ¸¸å®¢",
        _: 1576328371077
      }
    })
    console.log(result)
  }
  render() {
    return (
      <SearchGoodsWrap>
        <header>
          <div onClick={this.goBack}></div>
          <div>
            <input type="text" placeholder="搜索你喜欢的宝贝"/>
            <i></i>
          </div>
          <span>搜索</span>
        </header>
        <HotWrap>
          <TitleWrap><img src={hotIco} alt=""/><span>精品推荐</span></TitleWrap>
          <div>
            {

            <span>狗笼子</span>
            }
          </div>
        </HotWrap>  
        <RecentlyWrap>
          <TitleWrap><img src={recentlyIco} alt=""/><span>最近搜索</span></TitleWrap>
            <ul>
              <li>发育宝</li>
              <li>发育宝</li>
              <li>发育宝</li>
              <li>发育宝</li>
              <li>发育宝</li>
            </ul>
        </RecentlyWrap>    
        <div className="clear-history">清空历史纪录</div>  
      </SearchGoodsWrap>
    );
  }
}

export default SearchGoods;