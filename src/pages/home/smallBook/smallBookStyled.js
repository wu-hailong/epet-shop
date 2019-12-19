import styled from "styled-components"

import border from "components/styled/border"

export const ContentWrap = styled.div`
  height:100%;
  overflow-y:scroll;
  .scroll-wrap{
    height:100%;
  }
  .abso{
    position:absolute;
    width:100%;
    top:0;
    z-index:10;
  }
  .search-wrap{
    height:86px;
  }
`

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
    .search{
      img{
        height: 15px;
        width: 15px;
      }
    }
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
    padding-top:20px;
    &:last-child{
      padding-bottom:25px;
    }
    .img-menu{
      display:flex;
      >div{
        flex:1;
        text-align:center;
        img{
          max-width:75px;
        }
      }
    }
    .list-item{
      margin:0px auto;
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
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
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
      margin:0px auto;
      border-radius:10px;
      img{
        width:100%;
      }
    }
    .video-item{
      margin:5px auto 0;
      width:92%;
      background: #fff;
      box-shadow: 0px 10px 25px 0px rgba(23,23,23,0.1);
      border-radius: 5px;
      overflow: hidden;
      >div:first-child{
        position: relative;
        img{
          width:100%;
        }
        >div:first-child{
          position:absolute;
          height:100%;
          width:100%;
          background: rgba(0,0,0,.4);
        }
        >div:nth-child(2){
          position:absolute;
          border-radius: 0px 60px 60px 66px;
          padding: 0 7.5px;
          opacity: 0.99;
          font-weight: 400;
          background: #f3f4f5;
          position: absolute;
          right: 10px;
          bottom: 12px;
          font-size: 9px;
          color: #999

        }
        p{
          position:absolute;
          left: 15px;
          bottom: 9px;
          font-size: 15px;
          color:#fff;
        }
      }
      >div:last-child{
        background: #fff;
        padding: 15px 0px 8px 15px;  
        width:100%;
        overflow-x:scroll;
      }
    }
  }
`
export const LoadWrap =  styled.div`
  width:100px;
  margin:50% auto 0
`
export const ScrollWrap = styled.div`
    display:flex;
    width:max-content;
    >div{
      width: 110px;
      height:100%;
      margin-right: 10px;
      >div:first-child{
        position:relative;
        img{
          width:100%;
          border-radius:5px;
        }
        >div{
          position: absolute;
          bottom: 5px;
          right: 5px;
          background: #000;
          border-radius: 14px;
          height:14px;
          padding:0 7px;
          line-height:1;
          opacity:.4;
          img{
            width: 6px;
            margin-right:2px;
          }
          span{
            color:#fff;
            font-size:10px;
          }
        }
      }
      p{
        font-size: 10px;
        margin-top: 6px;
        line-height:1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      
  }

`
export const EmptyCollectionWrap = styled.div`
  height:100%;
  background: #fff;
  text-align:center;
  padding-top:20%;
  >div:first-child{
    height: 180px;
    width: 200px;
    margin: 0 auto;
    background: url(${props=>props.background}) 0 0 / 200px auto no-repeat;
    background-position: 0 -812px;
  }
  h3{
    font-size:15px;
    margin-top:15px;
    color:#666;
    font-weight:normal;
  }
  p{
    font-size:12px;
    color:#b7b7b7;
  }
  .login-btn{
    width: 101px;
    height: 35px;
    border: 1px solid #41c856;
    line-height: 35px;
    color: #41c856;
    text-align: center;
    border-radius: 20px;
    margin: 15px auto;
  }

`