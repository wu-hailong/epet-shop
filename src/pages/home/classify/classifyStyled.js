import styled from "styled-components"

// import border from "compontents/styled/border"

export const ClassifyWrap = styled.div `
  display:flex;
  flex-direction:column;
  height:100%;
`

export const HeaderWrap = styled.header `
  height:40px;
  padding:0 15px;
  display:flex;
  background: #fff;
  border-bottom: 1px solid #cbcbcb;
  position:relative;
  >div{
    flex:1;
    span{
      color:#333;
      display: inline-block;
      line-height:40px;
      height: 40px;
      padding: 0 4px;
      font-size:13px;
      font-weight:700;
      &.active{
        color:#41C856;
        border-bottom:2px solid #41C856;
      }
    }
  }
  >div:first-child{
    text-align:right;
    padding-right:5%;
  }
  >div:last-child{
    padding-left:5%;
  }
  img{
    position:absolute;
    height:14px;
    right:15px;
    top:13px;
  }
`
export const ContentWrap = styled.div  `
  flex:1;
  overflow: hidden;
`
export const ClassificationWrap = styled.div `
  display:flex;
  height:100%;
  .slider{
    background: #fff;
    overflow-y:scroll;
    ul{
      width:70px;
      li {
        height:50px;
        line-height:50px;
        text-align:center;
        font-size:13px;
        border-bottom: 1px solid #f3f4f5;
        color:#000;
        &.active{
          background: #f3f4f5;
          color: #41C856;
        }
      }
    }
  }
  .kind-con{
    overflow-y:scroll;
    background: #fff;
    flex:1;
    margin-left:.05rem;
    margin-top:.05rem;
    .top-img{
      img{
        width:100%;
      }
    }
  }
`
export const KindDetailWrap = styled.div `
    padding: .05rem .05rem .2rem;
    border-top: 1px solid #f3f4f5;
    >div:first-child{
      font-size:.12rem;
      color:#999;
      padding:.1rem 0 0 .05rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      img{
        height:.1rem;
        margin:.05rem .05rem 0 0;
      }
    }
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        padding:0 .05rem;
        margin-top:.1rem;
        width:33.33%;
        text-align:center;
        img{
          width:100%;
        }
        p{
          margin-top:.1rem;
          height:.2rem;
          font-size:.13rem;
          line-height:.2rem;
          color:#333;
          text-overflow:ellipsis;
          white-space:nowrap;
          overflow:hidden;
        }
      }
    }
`
export const BrandItemWrap = styled.li`
  width:50% !important;
  >div{
    height:55px;
    border: 1px solid #f3f4f5;
    img{
      height:45px;
      width:auto !important;
      margin-top:4px;
    }
  }
  P{
    font-size:.12rem !important;
  }

`