import React from "react"
import { BasicMsgtWrap } from "./detailStyled"
export default props=>{
  return (
    <BasicMsgtWrap>
      <div className="desc-msg">
        <p>{ props.basicMsg.subject }</p>
        <p>{ props.basicMsg.presubject }</p>
      </div>
      <div className="price">
        <div>
          <span>￥<i>{props.goodsDetail.sale_price}</i></span>
          <span>￥<i>{props.goodsDetail.market_price}</i></span>
        </div>
        <div>
          <img src={props.basicMsg.price_right.img} alt=""/>
        </div>
      </div>
    </BasicMsgtWrap>
  )
}