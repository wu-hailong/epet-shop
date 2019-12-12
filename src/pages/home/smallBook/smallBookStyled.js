import styled from "styled-components"

import border from "components/styled/border"

export const HeadSearch =border(styled.div`
  height:86px;
  background: #fff;
  padding:0 .15rem;
`)

export const HeadSearchWrap = styled.div `
  height:50px;
  padding:10px 0;
  display:flex;
  >div:first-child{
    display:flex;
    align-items:center;
    justify-content:center;
    span{
      margin: 0 5px;
    }
  }
  >div:last-child{
    padding-right:0 !important;
  }
  .position{
    height:16px;
  }
  .down{
    height:4px;
  }
`
export const MenuWrap = styled.ul`
  display:flex;
  height:36px;
  li{
    flex:1;
    text-align:center;
    line-height:30px;
    font-size:12px;
    color:#333;
    &.active{
      font-size:15px;
      font-weight:700;
      &::after{
        display:block;
        content:"";
        height:5px;
        width:15px;
        background: linear-gradient(#8FE6A9,#7FD6AD);/* #7FD6AD #8FE6A9 */      
        border-radius:5px;
        margin: 1px auto 0;
      }
    }
  }
`
export const ContentListWrap = styled.ul`
  background: #fff;
  li{
    height:100px;
  }
`