import styled from "styled-components"

import otherIco from "assets/images/other.png"

export const GoodsDetailWrap = styled.div`
  padding-bottom:50px;
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
export const CarouselWrap = styled.div`
  height:0;
  font-size:0;
  width:100%;
  padding-bottom:100%;
  touch-action: none; 
  background: #fff;
  position:relative;
  img{
    width:100%;
    height:3.75rem !important;
  }
  .slider-list{
    height:3.75rem !important;
  }
`
export const NumberWrap = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 1;
    right: 10px;
    bottom: 10px;
    font-size:10px;
    text-align:center;
    background: rgba(0,0,0,0.2);
    border-radius: 100%;
    color: #fff;
    line-height: 30px;
`
export const BasicMsgtWrap = styled.div`
  background: #fff;
 .desc-msg{
    p:first-child{
      font-size: 13px;
      color: #333;
      padding: 0 10px;
    }
    p:last-child{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #e75656;
      padding: 0 10px;
    }
  }
  .price{
    margin:10px 0px 20px 10px;
    border-top: #e5e5e5 solid 1px;
    background: #fff;
    display:flex;
    padding-bottom:10px;
    >div:first-child{
      flex:1;
      span{
        font-size:12px;
        margin-right:5px;
      }
      span:first-child{
        color:#ea5858;
        i{
        font-size: 20px;
        }
      }
      span:last-child{
        color:#333;
        text-decoration:line-through;
      }
    }
    >div:last-child{
      height:25px;
      margin:8px 10px 0 0;
      img{
        height:25px;
      }
    }
  }
`

export const GoodsFormatWrap = styled.div`
  background: #fff;
  .title{
    margin-left:10px;
    padding:10px 0;
    color:#666;
    border-bottom: 1px solid #eee;
    span{
      color:#ea5858;
    }
  }
  .content{
      display:flex;
      padding:10px;
      margin-bottom:10px;
    >div:first-child{
      width:13%;
      color: #999;
    }
    >div:last-child{
      width:85%;
      span{
        display:inline-block;
        padding: 5px 20px;
        line-height: 1;
        border: 1px solid #e7e7e7;
        white-space:nowrap;
        border-radius: 5px;
        margin-bottom: 5px;
        margin-right: 5px;
        &.active{
          color: #fff ;
          background-color: #f03e3e;
        }
      }
    }
  }

`

export const BuyNumBarWrap = styled.div`
  padding:10px;
  margin-bottom:10px;
  background: #fff;
  display:flex;
  color:#333;
  >div:first-child{
    line-height:30px;
    font-size:13px;
    margin-right:20px;
  }
  >div:last-child{
    display:flex;
    text-align:center;
    line-height:28px;
    span{
      display:inline-block;
      width:30px;
      height:30px;
      border: 1px solid #999;
    }
    >span:first-child{
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    >span:last-child{
       border-top-right-radius: 5px;
       border-bottom-right-radius: 5px;
    }
    input{
      height:30px;
      width:60px;
      border:none;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
      text-align:center;
      color: #f03e3e;
    }
  }

`
export const AddressSelectWrap = styled.div`
  background: #fff;
  margin-bottom:10px;
  >div{
    display:flex;
    padding:10px 0;
  }
  >div:first-child{
    margin-left:10px;
    display:flex;
    align-items:center;
    position:relative;
    img{
      height:15px;
      margin:0 2px;
    }
    >div{
      font-size:13px;
      color:#333;
    }
    >span{
      font-size:12px;
      display: inline-block;
      line-height: 1;
      padding: 3px;
      border-radius: 5px;
      border: 1px solid #e7e7e7;
      color: #999;
      position:absolute;
      right:20px;
      &::after{
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 7px;
        height: 7px;
        top: 50%;
        margin-top:-3.5px;
        right: -10px;
        border-top: 2px solid #d9d9d9;
        border-right: 2px solid #d9d9d9;
        transform: scaleY(0.9) rotateZ(45deg);
      }
    }
  }
  >div:last-child{
    font-size:12px;
    border-top:1px solid #eee;
    >div{
      text-align:center;
      flex:1;
      img{
        height:20px;
        margin-right:5px;
      }
    }
  }

`
export const AddToCartWrap = styled.div`
    position: fixed;
    height: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
    background: #f5f6f8;
    display:flex;
    >div{
      flex:1;
    }
    >div:first-child{
    }
    >div:last-child{
      background-color: #f03e3e;
      color: #fff;
      text-align:center;
      line-height:50px;
    }
`