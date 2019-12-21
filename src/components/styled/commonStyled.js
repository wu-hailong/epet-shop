import styled from "styled-components"
import border from "./border"
import headerIco from "assets/images/header-ico.png"
import headerMenuIco from "assets/images/nav-ico2.png"
import msgIco from "assets/images/msg-ico.png"
import msgActiveIco from "assets/images/msg-active.png"

export const GoTopWrap = styled.div`
    position: fixed;
    right: 10px;
    width: 28px;
    height: 28px;
    bottom:70px;
    display:none;
    z-index:1000;
    img{
      width:100%;
    }
    &.show{
      display:block;
    }

`

export const HeaderWrap = border(styled.header`
    height:50px;
    background: #fff;
    display:flex;
    padding:0 10px;
    align-items:center;
    >div:first-child{
        height:35px;
        width:35px;
        background: url(${headerIco}) 0 0 / 35px auto no-repeat;
    }
    >div:nth-child(2){
      flex:1;
      font-size:18px;
      height:100%;
      line-height:50px;
      text-align:center;
    }
    >div:last-child{
        height:35px;
        width:35px;
        background: url(${headerIco}) 0 -70px / 35px auto no-repeat;
    }
`)

export const HeaderMenuWrap  = styled.div `
  height:${props=>props.height};
  transition:all .3s ease;
  background:#fff;
  display:flex;
  overflow:hidden;
  >div{
    flex:1;
    padding-top:11px;
    >div{
      width:25px;
      height:25px;
      margin: 0 auto;
      background: url(${headerMenuIco}) -172px -7px / 234px 163px no-repeat
    }
    p{
      text-align:center;
      color:#666;
    }
  }
  >div:nth-child(2){
    >div{
      background-position: -172px -49px;
    }
  }
  >div:nth-child(3){
    >div{
      background-position: -172px -90px;
    }
  }
  >div:nth-child(4){
    >div{
      background-position: -172px -133px;
    }
  }
`

export const SearchWrap = styled.div `
  height:30px;
  display:flex;
  flex:1;
  justify-content:space-between;
  align-items:center;
  padding:0 15px;
  .search{
    flex:1;
    height:100%;
    margin-right:15px;
    background:${props=>props.searchType === "book" ? "rgba(240,240,240,1)" : "#f7f7f7"};
    border-radius:30px;
    line-height:30px;
    img{
      height:10px;
      width:10px;
      margin:0 5px 0 15px;
    }
    span{
      font-size:12px;
      color: #666;
    }
  }
  .msg{
    width:25px;
    height:25px;
    background:url(${props=>props.searchType === "book"|| props.sty.active ? msgActiveIco : msgIco}) center / 100% no-repeat;
  }
`

export const BookItemWrap = styled.li`
    padding-top:20px;
    &:last-child{
      padding-bottom:25px;
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

`
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