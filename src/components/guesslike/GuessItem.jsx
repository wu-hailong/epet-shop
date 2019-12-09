import React, { Component } from 'react';

import { GuessItemWrap } from "./guessStyled"

import GuessItemCon from "./GuessItemCon"

class GuessItem extends Component {
  render() {
    return (
      <GuessItemWrap>
        {
          this.props.data.goods.map(item=>{
            return (
              <li key={item.gid}>
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