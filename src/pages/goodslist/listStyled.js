import styled from "styled-components"

import border from "components/styled/border"

export const ListWrap = styled.div`
  height:100%;
  overflow-y:scroll;
`
export const ListItemWrap = border(

  styled.li`
  background: #fff;
  padding:10px;
  display:flex;
  >div:first-child{
    width:100px;
    height:100px;
    position:relative;
    >img{
      height:100%;
      width:100%;
    }
    .country{
      position: absolute;
      width: 25px;
      height: 25px;
      top:0;
      left:0;
      overflow:hidden;
      border-radius:50%;
      img{
        position:absolute;
        top: -3px;
        left: -14px;
      }
    }
    .cover{
      height:60px;
      width:60px;
      position: absolute;
      top: 20px;
      left: 20px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  >div:last-child{
    flex:1;
    margin-left:10px;
    min-width:0px;
    h3{
      font-size:12px;
      color: #333;
      font-weight:400;
      height:32px;
      line-height:16px;
    }
    .labels{
      height:25px;
      margin-top:5px;
      img{
        height:17px;
      }
    }
    .price{
      color: #FF5757;
      span:last-child{
        font-size: 12px;
        color: #999;
      }
    }
    .comments{
      font-size:12px;
      color: #999;
    }
    .cart{
      position:absolute;
      bottom: 10px;
      right: 10px;
      width: 30px;
      height:30px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
`
)

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
export const NotFindWrap = styled.div`
    background: #f5f5f5;
    height:100%;
    overflow:hidden;
    padding:20px;
    text-align:center;
    img{
      width:35%;
      margin: 0 0 10px;
    }
    p{
      color:#666;
      text-align:center;
      overflow:hidden;
      span{
        color:#f11;
      }
    }
`