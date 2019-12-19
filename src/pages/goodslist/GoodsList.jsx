import React, { Component } from 'react';
import CommonHeader from "components/header/CommonHeader"
import NavBar from "./NavBar"
import ListItem from "./ListItem"
import searchIco from "assets/images/search-btn.png"
import loadMoreIco from "assets/images/load-more.gif"
import { ListWrap , SearchWrap} from "./listStyled"
import { get } from "utils/http"
import NotFind from './NotFind';
import { ActivityIndicator } from "antd-mobile"
import BScroll from "better-scroll"
class GoodsList extends Component {
  state={
    keyword: this.props.location.state.keyword || "",
    cateid:this.props.location.state.cateid,
    list:[],
    nogoods:false,
    nodata:false
  }
  async componentDidMount(){
    let page = 1
    let params={
      page,
      extend_pam: this.state.keyword === "" ? "" : `keyword:${this.state.keyword}`,
      cateid: this.state.keyword === "" ? this.state.cateid : ""
    }
    let result = await get({
      url:"/v3/goods/list/main.html",
      params
    })
    this.setState({
      list:result.list,
      nogoods:result.no_goods_tip ? true : false
    })
    let bScroll = new BScroll(".scroll-wrap",{
      click:true,
      probeType:2,
      pullUpLoad:true
    })
   //上拉加载更多
    bScroll.on("pullingUp",async()=>{
      // console.log(1)
      page ++
      params={
        page,
        extend_pam: this.state.keyword === "" ? "" : `keyword:${this.state.keyword}`,
        cateid: this.state.keyword === "" ? this.state.cateid : ""
      }
      let result = await get({
        url:"/v3/goods/list/main.html",
        params
      })
      if(result.list.length === 0){
          this.setState({
            nodata:true
          })
          return false
      }
      this.setState({
        list:[...this.state.list,...result.list]
      })
      bScroll.refresh()
      bScroll.finishPullUp()
    })
  }
  toSearch=()=>{
    this.props.history.push({
      pathname:"/search",
      state:"sele"
    })
  }
  render() {
    return (
      <ListWrap className="scroll-wrap">
        <div>
        <CommonHeader>商品列表</CommonHeader>
        <SearchWrap>
          <div onClick={this.toSearch}><img src={searchIco} alt=""/>{this.state.keyword || "点击搜索商品"}</div>
        </SearchWrap>
        <NavBar></NavBar>
        { this.state.list.length !== 0
          ? <ul className="list">
              {
                this.state.list.map(item=>{
                  return <ListItem key={item.gid} {...item}></ListItem>
                })
              }
              <div className="load-more">
                {!this.state.nodata 
                ? <>
                    <img src={loadMoreIco} alt=""/> 上拉加载更多...
                  </>
                : <>
                   我是有底线的哦~~
                  </>
                }
              </div>
            </ul>
          : this.state.nogoods
          ? <NotFind keyword={this.state.keyword}></NotFind> 
          : <ActivityIndicator toast text="正在加载..." />      
        }
        </div>
      </ListWrap>
    );
  }
}

export default GoodsList;