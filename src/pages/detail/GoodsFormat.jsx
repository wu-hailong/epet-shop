import React from "react"
import { GoodsFormatWrap } from "./detailStyled"
export default props=>{
  return (
    <GoodsFormatWrap>
      <div className="title">已选：<span>'单袋装'</span></div>
      <div className="content">
        <div>包装</div>
        <div>
          <span className="active">单袋装</span>
          <span>整盒装</span>
          <span>整盒装整盒装</span>
          <span>整盒装整盒装整盒装</span>
          <span>装</span>
          <span>整盒装</span>
        </div>
      </div>
    </GoodsFormatWrap>
  )
}