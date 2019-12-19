import styled from "styled-components"

export const SelectionWrap = styled.div `
   background:#fff;
   height:100%;
   overflow-y:scroll;
   .go-top{
    position: fixed;
    right: 10px;
    width: 28px;
    height: 28px;
    bottom:70px;
    display:none;
    img{
      width:100%;
    }
   }
  .show{
    display:block;
  }
`

export const TopWrap = styled.div `
  background:${props=>props.sty.bg};
  padding-top:25px;
  height:104px;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:1000;

`
export const TopBarWrap = styled.div `
  height:44px;
  margin-top:5px;
  overflow-x:scroll;
  ul{
    display:flex;
    line-height:44px;
    white-space:nowrap;
    width:140%;
    li{
      font-size:14px;
      text-align:center;
      flex:1;
      color:${props=>props.sty.color};
    }
    >li:first-child{
      font-size:20px;
      font-weight:700;
    }
  }

`

export const SwiperWrap = styled.div`
  height:0;
  font-size:0;
  padding-bottom:77.333333%;

  img{
    width:100%;
  }
  .slider-decorator-0{
    bottom:.25rem !important;
  }
`

export const GridbarWrap = styled.div `
  ul{
    display:flex;
    height:1.15rem;
    li{
      flex:1;
      position:relative;
      background:#fff;
      img{
        z-index:10;
        position: absolute;
        margin-top:-.24rem;
        height:100%;
        width:100%;
      }
    }
  }
`
export const HotWrap = styled.div `
  height:1.86rem;
  background:#fff;
  padding:0 .15rem .2rem .15rem;
  >div{
    display:flex;
    height:100%;
    box-shadow: 1px 2px 25px 0px rgba(0,0,0,0.1);
    border-radius: 15px;
    >div{
    flex:1;
    padding:.15rem 0;
      >div:first-child{
        height:.25rem;
      }
      >div:last-child{
        height:1rem;
      }
    }
    .panic-buy{
      >div:first-child{
        margin:0 .1rem;
        display:flex;
        align-items:center;
        img{
          height:.16rem;
          width:.6rem;
        }
        .label-wrap{
          height:.2rem;
          font-size:.12rem;
          line-height:.2rem;
          transform:scale(.74);
          white-space:nowrap;
          border:1px solid #fb4752;
          border-radius:.2rem;
          overflow:hidden;
          span{
            padding:.04rem
          }
          span:first-child{
            background:#fb4752;
            color:#fff;
          }
          span:last-child{
            background:#fff;
            color:#333;
          }
        }
      }
    }
    .assemble-buy{
      >div:first-child{
        height:.25rem;
        margin:0 .1rem;
        img{
          height:.17rem;
        }
      }
 
    }
  }
`
export const ItemWrap = styled.div `
     height:1rem;
      display:flex;
      margin-top:.15rem;
`

export const HotItemWrap = styled.div `
  margin-left:.1rem;
  position: relative;
  flex:1;
  text-align:center;
  img{
    height:.58rem;
  }
  .discount{
    height:.18rem;
    position: absolute;
    top:0;
    right:0;
    img{
      height:100%;
    }
  }
  p{
    line-height:1.6;
  }
  .new-price{
    font-size:.1rem;
    color:#ff5757;
    span{
      font-size:.14rem;
      font-weight:700;
    }
  }
  .old-price{
    font-size:.12rem;
    color: #999;
    text-decoration:line-through;
  }
`
export const AdvertSwiperWrap = styled.div `
    margin-bottom:.35rem;
    background: #fff;
    img{
      width:3.75rem;
    }
`

export const FooterWrap = styled.div `
  padding: .2rem .2rem .15rem;
  >div:first-child{
    text-align:center;
    span{
      color: #ff5757;
      padding-right:.1rem;
    }
    a{
      color:#333;
      padding-right:.1rem;
    }
  }
  >div:last-child{
    text-align:center;
    font-size:.12rem;
  }
`