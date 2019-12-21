import React from 'react';
import goTopIco from "assets/images/go-top.png"
import { GoTopWrap } from "../styled/commonStyled"

export default props=> {
    return (
      <GoTopWrap className={props.showGoTop ? "show":"" } onClick={props.goTop}>
       <img src={goTopIco} alt=""/>
     </GoTopWrap>
    )
}