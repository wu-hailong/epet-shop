import styled from "styled-components"

import border from "components/styled/border"
import cartIco from "assets/images/cart-ico.png"

export const GuessWrap = styled.div `
  .title{
    padding:0 .1rem;
    margin-bottom:.2rem;
    img{
      height:.19rem;
    }
  }

`

export const ItemConWrap = border(styled.div `
  padding:.15rem;
  border-radius: .1rem;
  img{
    width:100%;
  }
  .content-name{
    height:.32rem;
    font-size:.12rem;
    line-height:.16rem;
    margin:.05rem 0;
    overflow:hidden;
  }
  .content-price{
    font-size:.1rem;
    font-weight:700;
    color:#ff5757;
    span{
      font-size:.14rem;
    }
  }
  .interest{
    height:.18rem;
  }
  .add-cart{
    position:absolute;
    width:.26rem;
    height:.26rem;
    bottom: .32rem;
    right: .2rem;
    background:url(${cartIco}) center / 100% no-repeat;
  }
`)

export const GuessItemWrap = styled.ul `
height:2.58rem;
margin-bottom:.1rem;
padding:0 .05rem;
display:flex;
li{
  padding: 0 .05rem;
  flex:1;
}
`

