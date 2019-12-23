import styled from "styled-components"

import otherIco from "assets/images/other.png"

export const GoodsDetailWrap = styled.div`

`
export const TopBarWrap = styled.div`
  margin:0 10px;
  text-align:center;
  position: relative;
  span{
    padding-bottom: 11px;
    margin:0 5px;
    &.active{
      border-bottom: 2px solid #f03e3e;
    }
  }
  i{
    display:inline-block;
    position: absolute;
    top:11px;
    right:0;
    height:20px;
    width:20px;
    background:url(${otherIco}) no-repeat 0px 2px / 50px auto;
  }
` 