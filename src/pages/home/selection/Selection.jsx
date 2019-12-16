import React , { Component } from "react"

import { connect } from "react-redux"

import { SelectionWrap } from "./stlyleSelection" 


// import _ from "lodash"

//组件
import Swipr        from  "./Swiper"
import TopMenu      from  "./TopMenu"
import Gridbar      from  "./Gridbar"
import Hot          from  "./Hot"
import AdvertSwiper from  "./AdvertSwiper"
import GuessLike    from  "components/guesslike/GuessLike"
import Footer       from  "./Footer"
import {ActivityIndicator} from 'antd-mobile'
// import { get } from "utils/http"

import { GETDSELECTIONATA } from "../action-types"

const mapState = state=> ({
    data:state.home.list //在store/reducers
  })

const mapDispacth = dispatch=>({
    loadData({url,params}){
      dispatch({
        type:GETDSELECTIONATA,
        url,
        params
      })
    }
  })


class Selection extends Component {
  state={
    topmenuBg:"transparent"
  }
  componentDidMount(){
    let url = "/v3/index/main.html"
    let params = {
        do: "getStaticV415",
        pet_type: "dog",
        version: 435
    }
    this.props.loadData({url,params})
  }
  render(){
    let { data:dataSource } = this.props
    let bannerData , hotData , advertSwiperList=[] , guessTitle , guessList=[]
    if(dataSource.datas){
      let { list } = dataSource.datas
      list.forEach(item=>{
        switch(item.type){
          case "212":
              guessList.push(item)
              break;
          case "208":
              guessTitle = item
              break;
          case "201":
              bannerData = item
              break;
          case "209":
              hotData = item
              break;
          case "202":
              advertSwiperList.push(item)
              break;
          default:
            break;        
        }
      })
      let data = {
        menuList:dataSource.datas.navs.menus.data,
        swiperList:bannerData.data.images,
        gridList:bannerData.data.menus,
        hotData:hotData.data,
        advertSwiperList,
        guessTitle:guessTitle.data,
        guessList
      }
      return (
            <SelectionWrap onScroll={this.handleScroll}>
              <TopMenu menuList={data.menuList} background={this.state.topmenuBg}></TopMenu>
              <Swipr swiperList={data.swiperList}></Swipr>
              <Gridbar gridList={data.gridList}></Gridbar>
              <Hot {...data.hotData}></Hot>
              {
                advertSwiperList.map(item=>{
                  return <AdvertSwiper key={item.index} {...item.data}></AdvertSwiper>
                })
              }    
              <GuessLike title={data.guessTitle} data={data.guessList}></GuessLike>
              <Footer></Footer>
            </SelectionWrap>
          )   
    }else{
      return <ActivityIndicator toast text="正在加载..." />
    }
  }
}

export default connect(mapState,mapDispacth)(Selection)