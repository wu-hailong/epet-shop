import React, { Component } from 'react';

import { GuessWrap } from "pages/home/selection/stlyleSelection"
import GuessItem from "./GuessItem"
class GuessLike extends Component {
  render() {
    return (
     <GuessWrap>
        {this.props.title.left ? (
            <>
              <div className="title"><img src={this.props.title.left.img_url} alt=""/></div>
                <div className="content">
                  {this.props.data.map(item=> <GuessItem key={item.index} {...item}></GuessItem>)}
              </div>
            </>
        ):null  
        }
     </GuessWrap>
    );
  }
}

export default GuessLike;