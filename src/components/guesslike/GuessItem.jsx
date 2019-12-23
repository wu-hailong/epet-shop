import React, { Component } from 'react';

import { GuessItemWrap } from "./guessStyled"
import { withRouter } from "react-router-dom"
import GuessItemCon from "./GuessItemCon"
@withRouter
class GuessItem extends Component {
  goToDetail =(gid)=>()=>{
    this.props.history.push({
      pathname:"/goodsdetail",
      state:{
        gid
      }
    })
  }
  render() {
    return (
      <GuessItemWrap>
        {
          this.props.data.goods.map(item=>{
            return (
              <li key={item.gid} onClick={this.goToDetail(item.gid)}>
                <GuessItemCon {...item}></GuessItemCon>
              </li>
            )
          })
        }

      </GuessItemWrap>
    );
  }
}

export default GuessItem;