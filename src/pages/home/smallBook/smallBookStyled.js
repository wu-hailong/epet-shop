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
    .img-menu{
      display:flex;
      >div{
        max-width:75px;
        img{
          width:100%;
        }
      }
    }
    .list-item{
      margin:20px auto;
      width:92%;
      padding:15px;
      box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
      border-radius: 10px;
      .item-content{
        display:flex;
        >div:first-child{
          width: 125px;
          height: 62px;
          img{
            height:100%;
            width:100%;
          }

        }
        >div:last-child{
          flex:1;
          padding-left: 10px;
          min-width:0;
          h3{
            font-size:14px;
            line-height:14px;
            font-weight:normal;
          }
          p{
            margin-top: 8px;
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .author-msg{
        margin-top: 4px;
        font-size:16px;
        display:flex;
        justify-content:space-between;
        span{
          font-size:12px;
        }
        >div:first-child{
          img{
            width: 23px;
            height: 23px;
            border-radius:50%;
            margin-right:5px;
            }
        }
        >div:last-child{
          width:53px;
          img{
            margin-right:5px;
            width:16px;
          }
        }
      }
    }
    .img-item{
      box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
      width:92%;
      margin:20px auto;
      border-radius:10px;
      img{
        width:100%;
      }
    }
  }
`