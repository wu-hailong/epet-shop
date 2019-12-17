import React from "react"
import { NotFindWrap } from "./listStyled"
import noFindImg from "assets/images/nofind.png"
export default (props)=>{
  return (
    <NotFindWrap>
      <img src={noFindImg} alt=""/>
      <p>
        sorry～当前未找到"<span>{props.keyword}</span>"相关的结果！
      </p>
    </NotFindWrap>
  )
}