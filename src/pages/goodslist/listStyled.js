import styled from "styled-components"

import border from "components/styled/border"

export const ListWrap = styled.div`


`

export const SearchWrap = styled.div`
  padding:10px;
  background: #fff;
  >div{
    height:40px;
    background: #f6f6f6;
    padding:0 10px;
    line-height:40px;
    font-size:13px;
    border-radius:5px;
    img{
      width:14px;
      height:14px;
      margin-right:10px;
      margin-left:10px;
    }
  }
`

export const NavBarWrap  = border(
  styled.ul`
  height:40px;
  background: #fff;
  display:flex;
  li{
    flex:1;
    text-align:center;
    line-height:40px;
  }
`
)
