import React, { Component } from 'react'
import CommonHeader from "components/header/CommonHeader"
import NavBar from "./NavBar"
import ListItem from "./ListItem"
import searchIco from "assets/images/search-btn.png"
import loadMoreIco from "assets/images/load-more.gif"
import { ListWrap , SearchWrap} from "./listStyled"
import { get } from "utils/http"
import NotFind from 'components/404/NotFind'
import GoTop from "components/gotop/GoTop"
import { ActivityIndicator } from "antd-mobile"
import BScroll from "better-scroll"
import _ from "lodash"
import { GETSORTDATA } from '../action-types';
import { connect } from "react-redux"
const mapState = state=> {
  return {
    data:state.getIn(['goodslist','list'])
  }
}
const mapDispatch = dispatch=>({ 
  loadData({url,params}){
    dispatch({
      type:GETSORTDATA,
      url,
      params
    })
  }
})
@connect(mapState,mapDispatch)
class GoodsList extends Component {
  state={
    keyword: this.props.location.state.keyword || "",
    cateid:this.props.location.state.cateid,
    nodata:false,
    showGoTop:false,
    list:[],
    firstLoad:true
  }
  async componentDidMount(){
    // console.log(this.props)
    let page = 1
    let params={
      page,
      extend_pam: this.state.keyword === "" ? "" : `keyword:${this.state.keyword}`,
      cateid: this.state.keyword === "" ? this.state.cateid : ""
    }
    let  url = "/v3/goods/list/main.html"
    this.props.loadData({url,params})
  
    this.bScroll = new BScroll(".scroll-wrap",{
      click:true,
      probeType:2,
      pullUpLoad:true
    })
  //  上拉加载更多
    this.bScroll.on("pullingUp", async ()=>{
      // console.log(1)
      page ++
      params={
        page,
        extend_pam: this.state.keyword === "" ? "" : `keyword:${this.state.keyword}`,
        cateid: this.state.keyword === "" ? this.state.cateid : "",
      }
      let result = await get({url,params})
      if(result.list.length === 0 ){
        this.setState({
          nodata:true
        })
        return false
      }
      //是否为第一次加载数据
      if(this.state.firstLoad){
        this.setState({
          list:[...this.state.list,...this.props.data.list,...result.list],
          firstLoad:false
        })
      }else{
        this.setState({
          list:[...this.state.list,...result.list],
        },()=>{
          this.bScroll.refresh()
        })
      }
      this.bScroll.finishPullUp()
    })

    //回到顶部逻辑
    this.bScroll.on("scroll",_.throttle(()=>{
      if(this.bScroll.y <= -600 && !this.state.showGoTop){
       this.setState({
          showGoTop:true
        })
      }else if(this.bScroll.y > -600 && this.state.showGoTop){
       this.setState({
          showGoTop:false
        })
      }
     
    }),1000)
  }

  toSearch=()=>{
    this.props.history.push({
      pathname:"/search",
      state:"sele"
    })
  }
  goTop = ()=>{
    this.bScroll.scrollTo(0 , 0 ,500)
  }

  render() {
    // console.log(this.props)
    let data
    let list
    if(this.state.firstLoad){
      data = this.props.data
      list = data.list || []
    }else{
      list = this.state.list
    }
    // console.log(1)
    return (
      <>
      <GoTop showGoTop={this.state.showGoTop} goTop={this.goTop}></GoTop>
      <ListWrap className="scroll-wrap">
        <div>
        <CommonHeader>商品列表</CommonHeader>
        <SearchWrap>
          <div onClick={this.toSearch}><img src={searchIco} alt=""/>{this.state.keyword || "点击搜索商品"}</div>
        </SearchWrap>
        <NavBar keyword = {this.state.keyword} cateid = {this.state.cateid}></NavBar>
        {list.length !== 0
          ? <ul className="list">
              {
                list.map(item=>{
                  return <ListItem key={item.gid} {...item}></ListItem>
                })
              }
              <div className="load-more">
                { !this.state.nodata && list.length >= 20
                ? <>
                    <img src={loadMoreIco} alt=""/> 上拉加载更多...
                  </>
                : <>
                  没有更多了哦~~
                  </>
                }
              </div>
            </ul>
          : data.no_goods_tip
          ? <NotFind keyword={this.state.keyword}></NotFind> 
          : <ActivityIndicator toast text="正在加载..." />      
        }
        </div>
      </ListWrap>
      </>
    );
  }
}

export default GoodsList;