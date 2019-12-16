import React, { Component } from 'react';

import { SearchGoodsWrap , TitleWrap , HotWrap , RecentlyWrap } from "./searchStyled"
import hotIco from "assets/images/hot.png"
import recentlyIco from "assets/images/recently.png"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"
import storage from "store"
@withRouter
class SearchGoods extends Component {

  state={
    hotWords:[],
    historyWords:JSON.parse(localStorage.getItem("historyWords")) || []
  }
  goBack=()=>{
    this.props.history.goBack()
  }
  async componentDidMount(){
    let result = await get({
      url:"v3/goodslist.html",
      params:{
        do: "getHotKeys",
        version: 340
      }
    })
    this.setState({
      hotWords:result.list
    })
  }
  clearHistory = ()=>{
    this.setState({
      historyWords:[]
    })
    localStorage.removeItem("historyWords")
  }
  handleKeyDown = (e)=>{
    console.log(this.state)
    if(e.keyCode === 13){
      let { value } = this.refs.inputValue
      //存储搜索历史纪录
      this.setState({
        historyWords:this.state.historyWords.unshift(value)
      })
      localStorage.setItem("historyWords",JSON.stringify(this.state.historyWords))
      //跳转并传过去keyword
      this.props.history.push({
        pathname:"/goodslist",
        state:{
          keyword:value
        }
      })
    }
  }
  render() {
console.log(storage)
    return (
      <SearchGoodsWrap>
        <header>
          <div onClick={this.goBack}></div>
          <div>
            <input ref="inputValue" type="text" placeholder="搜索你喜欢的宝贝" onKeyDown={this.handleKeyDown}/>
            <i></i>
          </div>
          <span>搜索</span>
        </header>
        <HotWrap>
          <TitleWrap><img src={hotIco} alt=""/><span>精品推荐</span></TitleWrap>
          <div>
            {this.state.hotWords.map(item=>{
              return <span key={item.words} >{item.words}</span>
            })  
            }
          </div>
        </HotWrap>
        <RecentlyWrap>
          <TitleWrap><img src={recentlyIco} alt=""/><span>最近搜索</span></TitleWrap>
            <ul>
              {
                this.state.historyWords.map((item,index)=>{
                 return <li key={item + index} >{item}</li> 
                })
              }
            </ul>
        </RecentlyWrap>    
        <div className="clear-history" onClick={this.clearHistory}>清空历史纪录</div>  
      </SearchGoodsWrap>
    );
  }
}

export default SearchGoods;