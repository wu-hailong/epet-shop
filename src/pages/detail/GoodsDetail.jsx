import React, { useState , useEffect} from 'react';

import { Carousel } from "antd-mobile"
import { GoodsDetailWrap ,CarouselWrap ,NumberWrap } from "./detailStyled"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"

import CommonHeader from "components/header/CommonHeader"
import TopBar from "./TopBar"
import BasicMsg from "./BasicMsg"
import GoodsFormat from './GoodsFormat'
import BuyNumBar from './BuyNumBar'
import AddressSelect from './AddressSelect'
import AddToCart from './AddToCart'

const GoodsDetail= props=>{
  let [data , setData] = useState([])
  let [goodsDetail , setDetail] = useState({})
  let [currentIndex,setIndex] = useState(1)
  let { gid } = props.location.state
  useEffect(()=>{
    const loadData = async ()=>{
      let result = await get({
        url:"/v3/goods/detail/main.html",
        params:{
          gid
        }
      })
      let detailResult = await get({
        url:"/v8/goods/detail/main.html",
        params:{
          do: 'GetDynamic',
          gid
        }
      })
    setData(result.datas)
    setDetail(detailResult)
    }
    loadData()

  },[gid]
  )
  //获取当前下标
  let getCurrentIndex = index=>{
    setIndex(index+1)
  }
  let swiperImg = data[0]
  let basicMsg = data[1]
console.log(data)
console.log(goodsDetail)

    return (
      <GoodsDetailWrap>
        {/* top部分 */}
       <CommonHeader>
         <TopBar></TopBar>
       </CommonHeader>
        {/* 轮播图部分 */}
       <CarouselWrap>
       <Carousel
          autoplay={false}
          dots={false}
          afterChange={getCurrentIndex}
        >
          {swiperImg &&
            swiperImg.photos.map(item=>{
              return <img key={item.image} src={item.image} alt=""/>
            })
          }
        </Carousel>
        {swiperImg &&
          <NumberWrap>
            <span>{currentIndex}</span>
            /
            <span>{swiperImg.photos.length}</span>
          </NumberWrap>
        }
      </CarouselWrap>
        {/* 基本信息及价格 */}
        {basicMsg &&
          <BasicMsg goodsDetail={goodsDetail} basicMsg={basicMsg}></BasicMsg>
        }
        {/* 商品规格信息选择 */}
        <GoodsFormat></GoodsFormat>
        {/* 购买数量选择 */}
        <BuyNumBar></BuyNumBar>
        {/* 地址选择 */}
        <AddressSelect></AddressSelect>
        {/* 加入购物车 */}
        <AddToCart></AddToCart>
      </GoodsDetailWrap>
    ) 
}

export default withRouter(GoodsDetail)
