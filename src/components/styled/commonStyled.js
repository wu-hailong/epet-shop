import styled from "styled-components"
import border from "./border"
import headerIco from "assets/images/header-ico.png"
import headerMenuIco from "assets/images/nav-ico2.png"
import msgIco from "assets/images/msg-ico.png"
import msgActiveIco from "assets/images/msg-active.png"

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