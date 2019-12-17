import React, { Component } from 'react';

import { SearchGoodsWrap , TitleWrap , HotWrap , RecentlyWrap } from "./searchStyled"
import { ActivityIndicator } from "antd-mobile"
import hotIco from "assets/images/hot.png"
import recentlyIco from "assets/images/recently.png"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"
@withRouter
class SearchGoods extends Component {

  state={
    hotWords:[]
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

  handleKeyDown = (e)=>{
    if(e.keyCode === 13){
      console.log(this.state)
      let { value } = this.refs.inputValue
      //存储搜索历史纪录
      this.saveSearchHistory(value)
      //跳转并传过去keyword
      this.props.history.push({
        pathname:"/goodslist",
        state:{
          keyword:value
        }
      })
    }
  }
  saveSearchHistory(value){
     //存储搜索历史纪录
    let  historyWords = JSON.parse(localStorage.getItem("historyWords")) || []
    let index = historyWords.indexOf(value)
    if(index !== -1){
        historyWords.splice(index,1)
        historyWords.unshift(value)
    }else{
        historyWords.unshift(value)
    }
    localStorage.setItem("historyWords",JSON.stringify(historyWords))
  }
  clearHistory = ()=>{
    //清空历史纪录
    localStorage.removeItem("historyWords")
    this.setState({})

  }
  toHistory=(keyword)=>()=>{
    this.saveSearchHistory(keyword)
      this.props.history.push({
        pathname:"/goodslist",
        state:{
          keyword
        }
     })
  }
  render() {
    let  historyWords = JSON.parse(localStorage.getItem("historyWords")) || []
    return (
      <>
        {this.state.hotWords.length !== 0 
          ? <SearchGoodsWrap>
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
                    return <span key={item.words}  onClick={this.toHistory(item.words)} >{item.words}</span>
                  })  
                  }
                </div>
              </HotWrap>
              <RecentlyWrap>
                <TitleWrap><img src={recentlyIco} alt=""/><span>最近搜索</span></TitleWrap>
                  <ul>
                    {
                      historyWords.map((item,index)=>{
                      return <li key={item + index} onClick={this.toHistory(item)} >{item}</li> 
                      })
                    }
                  </ul>
              </RecentlyWrap>    
              <div className="clear-history" onClick={this.clearHistory}>清空历史纪录</div>  
            </SearchGoodsWrap>
            : <ActivityIndicator toast text="正在加载..." />
        }
      </>
    );
  }
}

export default SearchGoods;