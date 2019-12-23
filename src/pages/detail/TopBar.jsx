import React from "react"
import { TopBarWrap } from "./detailStyled"
export default props =>{
  return (
    <TopBarWrap>
      <span className="active">商品</span>
      <span>详情</span>
      <span>评价</span>
      <i></i>
    </TopBarWrap>
  )
}