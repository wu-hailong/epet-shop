import React, { Component } from 'react';

import { GuessWrap } from "./guessStyled"
import GuessItem from "./GuessItem"
class GuessLike extends Component {
  render() {
    return (
     <GuessWrap>
        {this.props.title &&
         <>
          <div className="title"><img src={this.props.title.left.img_url} alt=""/></div>
            <div className="content">
              {this.props.data.map(item=> <GuessItem key={item.index} {...item}></GuessItem>)}
          </div> 
         </>
        }
     </GuessWrap>
    );
  }
}

export default GuessLike;