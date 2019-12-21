import styled from "styled-components"
import backIco from "assets/images/nav-ico2.png"
import searchIco from "assets/images/search-btn.png"

export const SearchGoodsWrap = styled.div`
  height:100%;
  background: #f4f5f7;
  .clear-history{
    width: 60%;
    margin: 40px auto 60px;
    line-height: 40px;
    font-size: 15px;
    border: 1px solid #777;
    text-align:center;
  }
  header{
    padding: 7px 12px;
    display:flex;
    background: #fff;
    font-size:16px;
    align-items:center;
    >div:first-child{
      width:16px;
      height:32px;
      background: url(${backIco})  -200px -4px / 234px 163px no-repeat;
      margin-right:5px;
    }
    >div:nth-child(2){
      height: 35px;
      line-height: 35px;
      font-size:14px;
      flex:1;
      display:flex;
      background: #f6f6f6;
      padding:0 10px;
      border-radius:5px;
      input{
        background: #f6f6f6;
        height:100%;
        flex:1;
        border:none;
      }
      i{
        display:inline-block;
        width:16px;
        height:100%;
        margin-right:10px;
        background: url(${searchIco}) center / 16px no-repeat
      }
    }
    span{
      display:inline-block;
      margin-left:5px;
      color:#666;
    }
  }
`

export const TitleWrap = styled.p`
 background: #fbfbfd;
  height:30px;
  line-height:30px;
  padding-left: 12px;
  img{
    margin-right:8px;
    height:20px;
  }
`
export const HotWrap = styled.div`

  >div{
    padding: 0 12px 23px;
    span {
    padding: 3px 10px;
    margin: 10px 10px 0 0;
    color: #999;
    font-size: 12px;
    border-radius: 15px;
    background: #fff;
    display:inline-block;
    }
  }
`
export const RecentlyWrap = styled.div`
  background: #fff;
  ul{
    padding-left: 12px;
    li{
    border-bottom: 1px solid #d7d7d7;
    line-height: 40px;
    font-size: 12px;
    padding-right:10px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    }
  }
  ul>li:last-child{
    border:none;
  }
`
export const SearchArticleWrap = styled.div`
  height:100%;
  background: #fff;
  .search{
    width: 92%;
    height:30px;
    margin: 7px auto 0;
    display:flex;
    font-size:12px;
    >div:first-child{
      height:100%;
      display:flex;
      flex:1;
      background: rgba(240,240,240,1);
      border-radius:30px;
      margin-right:15px;
      i{
        display:inline-block;
        width:38px;
        height:30px;
        background: url(${searchIco}) center / 14px no-repeat
      }
      input{
        background: rgba(240,240,240,1);
        border:none;
        height:100%;
      }
    }
    >div:last-child{
      width:30px;
      height:30px;
      line-height:30px;
    }
  }
  .search-history{
    width: 92%;
    margin: 20px auto 0;
    >div:first-child{
      margin-bottom:20px;
    }
    >div:last-child{
      font-size:12px;
      span{
        display: inline-block;
        height: 24px;
        padding: 0 13px;
        border: 1px solid #e7e7e7;
        border-radius: 20px;
        line-height: 22px;
        margin-bottom: 10px;
        margin-right: 6px;
      }
    }
  }

`
export const SearchWordWrap = styled.div`
  height:50px;
  background: #fff;
  padding:10px 0;
  >div{
    width: 92%;
    height: 30px;
    background: rgba(240,240,240,1);
    opacity: 0.8;
    border-radius: 30px;
    line-height: 30px;
    padding: 0 15px;
    margin:0 auto;
    font-size: 12px;
    font-weight: 300;
    img{
      height:14px;
      width:14px;
      margin-right:15px;
    }
  }

`
export const ListWrap = styled.ul`
background: #fff;
`