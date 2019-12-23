import React, { useState , useEffect} from 'react';

import CommonHeader from "components/header/CommonHeader"
import TopBar from "./TopBar"
import { Carousel } from "antd-mobile"
import { GoodsDetailWrap } from "./detailStyled"
import { withRouter } from "react-router-dom"
import { get } from "utils/http"

const GoodsDetail= props=>{
  let [data , setData] = useState([])
  let { gid } = props.location.state
  useEffect(()=>{
    const loadData = async ()=>{
      let result = await get({
        url:"/v3/goods/detail/main.html",
        params:{
          gid
        }
      })
    setData(result.datas)
    }
    loadData()
  },[gid]
  )
  let swiperImg = data[0]
    console.log(swiperImg)
    return (
      <GoodsDetailWrap>
       <CommonHeader>
         <TopBar></TopBar>
       </CommonHeader>
       {/* <Carousel
          autoplay={false}
          infinite
        >
         { swiperImg

         }
        </Carousel> */}
      </GoodsDetailWrap>
    ) 
}

export default withRouter(GoodsDetail)