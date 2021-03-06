import React, { Component } from 'react';
import { GridbarWrap } from "./stlyleSelection"
class Gridbar extends Component {
  render() {
    // console.log(this.props)
    return (
      <GridbarWrap>
          <ul> 
              { this.props.gridList &&
                this.props.gridList.map((item)=>{
                  return <li key={item.name}><img src={item.img_url} alt={item.name}/></li>
                })
              }
          </ul>
      </GridbarWrap>
    );
  }
}

export default Gridbar;