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

import { GETDSELECTIONATA } from "../action-types"
import goTopIco from "assets/images/go-top.png"

const mapState = state=> ({
    data:state.getIn(["home","list"]) //在store/reducers
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
    sty:{
      bg:"transparent",
      color:"#fff",
      active:false
    },
    showGoTop:false
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
  shouldComponentUpdate(props, state){
    // console.log(props, state)
    // console.log(!state.showGoTop)
    let shouldRender = !(state.sty.active && this.state.sty.active)
    // console.log(shouldRender)
    return shouldRender
  }
  handleScroll = (e)=>{
    // console.log(e.target)
    let { scrollTop } = e.currentTarget
    if(scrollTop === 0){
      this.setState({
        sty:{
          bg:"transparent",
          color:"#fff",
          active:false
        },
        showGoTop:false
      })
    }else{
      this.setState({
        sty:{
          bg:"#fff",
          color:"#333",
          active:true
        },
        showGoTop:true
      })
    }
  }
  goTop = ()=>{
    document.querySelector(".scroll-wrap").scrollTo({ 
      top: 0,
      behavior: "smooth"
  })
  }
  render(){
    let { data:dataSource } = this.props
    // console.log(this.props)
    let bannerData , hotData , advertSwiperList=[] , guessTitle , guessList=[]
    let data = {} 
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
        data = {
          menuList:dataSource.datas.navs.menus.data,
          swiperList:bannerData.data.images,
          gridList:bannerData.data.menus,
          hotData:hotData.data,
          advertSwiperList,
          guessTitle:guessTitle.data,
          guessList
        }
      }
        return (
              <SelectionWrap onScroll={this.handleScroll} className="scroll-wrap">
                { data.menuList
                  ? <>
                      <TopMenu menuList={data.menuList} sty={this.state.sty} ></TopMenu>
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
                      <div className={`go-top ${ this.state.showGoTop ? "show":""}`} onClick={this.goTop}>
                        <img src={goTopIco} alt=""/>
                      </div>
                    </>
                  :  <ActivityIndicator toast text="正在加载..." />
                }
              </SelectionWrap>
            )   
    
  }
}

export default connect(mapState,mapDispacth)(Selection)