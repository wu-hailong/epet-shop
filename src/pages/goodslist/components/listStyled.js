import styled from "styled-components"

import border from "components/styled/border"

import navIco from "assets/images/brands-ico.png"

export const ListWrap = styled.div`
  height:100%;
  overflow-y:scroll;
  .load-more{
    height:50px;
    line-height:50px;
    text-align:center;
    background: #fff;
    img{
      width:30px;
      height:30px;
    }
  }
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
      font-size:14px;
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
    position:relative;
    .am-icon-down{
      width:10px;
      height:10px;
    }
    &.active{
      color:#41C856;
    }
  }
  li:nth-child(3){

    span{
    display:inline-block;
    position: absolute;
    background: url(${navIco}) no-repeat -164px -54px;
    height: 20px;
    width:20px;
    top:11px;
    transform: scale(0.5);
    }
    &.active{
     span{
      background-position:-113px -54px;
     }
    }
    &.down{
      span{
      background-position:-138px -54px;
      }
    }
  }
  li:nth-child(4){

    span{
      display: inline-block;
      background: url(${navIco}) no-repeat -44px -14px;
      width: 15px;
      height: 17px;
      position: absolute;
      top: 12px;
    }
  }
`
)

export const SortListWrap = styled.div`
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0,0,0,.5);
      z-index: 1000;
      >div{
        padding:10px;
        position: relative;
        background:#f5f5f5;
        &.active{
            background: #fff;

        }
        &.active::after{
            content:"";
            width: 30px;
            height: 30px;
            display: block;
            background: url(${navIco}) no-repeat -24px -671px;
            position: absolute;
            top: 0;
            right: 0;
        }
      }
`