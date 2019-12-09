import React , { Component } from "react"

import { SelectionWrap } from "./stlyleSelection" 

// import _ from "lodash"

//组件
import Swipr        from  "./Swiper"
import TopMenu      from  "./TopMenu"
import Gridbar      from  "./Gridbar"
import Hot          from  "./Hot"
import AdvertSwiprt from  "./AdvertSwiprt"
import GuessLike    from  "./GuessLike"
import Footer       from  "./Footer"

import { get } from "utils/http"
class Selection extends Component {
  state={
    menuList:[],
    gridList:[],
    hotData:{},
    topAdvertData:{},
    centerAdcertData:{},
    bottomAdvertData:{},
    guessTitle:{},
    guessList:[]
  }
  async componentDidMount(){
    let result = await get({
      url:"/v3/index/main.html",
      params:{
        do: "getStaticV415",
        cdn_version: 201912061749191,
        pet_type: "dog",
        version: 435,
        is_single: 0,
        isWeb: 1,
        system: "wap",
        distinct_id: '16e64c78ae5184-01373374343693-67e1b3f-1327104-16e64c78ae6653'
      }
    })
    // console.log(result)
    this.setState({
      menuList:result.navs.menus.data,
      gridList:result.list[0].data.menus,
      hotData:result.list[5].data,
      topAdvert:result.list[8].data,
      centerAdcertData:result.list[12].data,
      bottomAdvertData:result.list[16].data,
      guessTitle:result.list[19].data,
      guessList:result.list.slice(20)
    })
  }
  render(){
    
    return (
      <SelectionWrap>
        <TopMenu menuList={this.state.menuList}></TopMenu>
        <Swipr></Swipr>
        <Gridbar gridList={this.state.gridList}></Gridbar>
        <Hot {...this.state.hotData}></Hot>
        <AdvertSwiprt {...this.state.topAdvert}></AdvertSwiprt>
        <AdvertSwiprt {...this.state.centerAdcertData}></AdvertSwiprt>
        <AdvertSwiprt {...this.state.bottomAdvertData}></AdvertSwiprt>
        <GuessLike title={this.state.guessTitle} data={this.state.guessList}></GuessLike>
        <Footer></Footer>
      </SelectionWrap>
    )
  }
}

export default Selection