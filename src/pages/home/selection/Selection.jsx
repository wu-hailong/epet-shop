import React , { Component } from "react"
//组件
import Swipr        from  "./Swiper"
import TopMenu      from  "./TopMenu"
import Gridbar      from  "./Gridbar"
import Hot          from  "./Hot"
import AdvertSwiprt from  "./AdvertSwiprt"

import { get } from "utils/http"
class Selection extends Component {
  state={
    menuList:[],
    gridList:[],
    hotData:{},
    topAdvertData:{},
    centerAdcertData:{},
    bottomAdvertData:{},
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
      hotData:result.list[4].data,
      topAdvert:result.list[7].data,
      centerAdcertData:result.list[11].data,
      bottomAdvertData:result.list[15].data,
    })
    // console.log(this.state.menuList)
  }
  render(){
    return (
      <>
        <TopMenu menuList={this.state.menuList}></TopMenu>
        <Swipr></Swipr>
        <Gridbar gridList={this.state.gridList}></Gridbar>
        <Hot hotData={this.state.hotData}></Hot>
        <AdvertSwiprt topAdvert={this.state.topAdvert}></AdvertSwiprt>
        {/* <AdvertSwiprt centerAdcertData={this.state.centerAdcertData}></AdvertSwiprt>
        <AdvertSwiprt bottomAdvertData={this.state.bottomAdvertData}></AdvertSwiprt> */}
      </>
    )
  }
}

export default Selection