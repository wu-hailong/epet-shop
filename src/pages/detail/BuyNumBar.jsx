import React from "react"
import { BuyNumBarWrap } from './detailStyled'
export default props=>{
  return (
    <BuyNumBarWrap>
      <div>购买数量</div>
      <div>
        <span>-</span>
        <input type="text" defaultValue={1}/>
        <span>+</span>
      </div>
    </BuyNumBarWrap>
  )
}