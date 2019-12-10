import React , { Component } from "react"

import { connect } from "react-redux"

import { SelectionWrap } from "./stlyleSelection" 


// import _ from "lodash"

//组件
import Swipr        from  "./Swiper"
import TopMenu      from  "./TopMenu"
import Gridbar      from  "./Gridbar"
import Hot          from  "./Hot"
import AdvertSwiprt from  "./AdvertSwiprt"
import GuessLike    from  "components/guesslike/GuessLike"
import Footer       from  "./Footer"

// import { get } from "utils/http"

import { GETDATA } from "../action-types"

const mapState = state=>{
  return {
    data:state.home.list //在store/reducers
  }
}

const mapDispacth = dispatch=>({
    loadData({url,params}){
      dispatch({
        type:GETDATA,
        url,
        params
      })
    }
  })


class Selection extends Component {

  componentDidMount(){
    let url = "/v3/index/main.html"
    let params = {
        do: "getStaticV415",
        cdn_version: 201912101904291,
        pet_type: "dog",
        version: 435,
        is_single: 0,
        isWeb: 1,
        system: "wap",
        distinct_id: '16e64c78ae5184-01373374343693-67e1b3f-1327104-16e64c78ae6653'
    }
    this.props.loadData({url,params})

  }
  render(){
    // console.log(this.props)
    let { data:dataSource } = this.props
    if(dataSource.datas){
      let data = {
        menuList:dataSource.datas.navs.menus.data,
        swiperList:dataSource.datas.list[0].data.images,
        gridList:dataSource.datas.list[0].data.menus,
        hotData:dataSource.datas.list[5].data,
        topAdvert:dataSource.datas.list[8].data,
        centerAdcertData:dataSource.datas.list[12].data,
        bottomAdvertData:dataSource.datas.list[16].data,
        guessTitle:dataSource.datas.list[19].data,
        guessList:dataSource.datas.list.slice(20)
      }
      return (
        <SelectionWrap>
          <TopMenu menuList={data.menuList}></TopMenu>
          <Swipr swiperList={data.swiperList}></Swipr>
          <Gridbar gridList={data.gridList}></Gridbar>
          <Hot {...data.hotData}></Hot>
          <AdvertSwiprt {...data.topAdvert}></AdvertSwiprt>
          <AdvertSwiprt {...data.centerAdcertData}></AdvertSwiprt>
          <AdvertSwiprt {...data.bottomAdvertData}></AdvertSwiprt>
          <GuessLike title={data.guessTitle} data={data.guessList}></GuessLike>
          <Footer></Footer>
        </SelectionWrap>
      )
    }else{
      return null
    }
  }
}

export default connect(mapState,mapDispacth)(Selection)