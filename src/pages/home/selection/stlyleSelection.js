import styled from "styled-components"

import msgIco from "assets/images/msg-ico.png"

export const SelectionWrap = styled.div `
  background:#fff;
`

export const TopWrap = styled.div `
  background:${props=>props.background};
  height:1.04rem;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:10;

`
export const TopBarWrap = styled.div `
  height:.44rem;
  margin-top:.05rem;
  overflow-x:scroll;
  ul{
    display:flex;
    line-height:.44rem;
    white-space:nowrap;
    width:140%;
    li{
      font-size:.14rem;
      text-align:center;
      flex:1;
      color:#fff;
    }
    >li:first-child{
      font-size:.2rem;
      font-weight:700;
    }
  }
`
export const TopSearchWrap = styled.div `
  height:.3rem;
  margin-top:.25rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 .15rem;
  >div:first-child{
    flex:1;
    height:100%;
    margin-right:.15rem;
    background: rgba(255,255,255,0.8);
    border-radius:.3rem;
    line-height:.3rem;
    img{
      height:.1rem;
      width:.1rem;
      margin:0 .05rem 0 .15rem;
    }
    span{
      font-size:.12rem;
      color: #666;
    }
  }
  >div:last-child{
    width:.25rem;
    height:.25rem;
    background:url(${msgIco}) center / 100% no-repeat;
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