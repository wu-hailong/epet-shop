import React, { Component } from 'react';

import { TopBarWrap } from "./stlyleSelection"

class TopBar extends Component {
  render() {
    return (
      <TopBarWrap
      {...this.props}
      >
        <ul>
          { this.props.menuList &&
            this.props.menuList.map((item,index)=>{
              if(index === 4 && item.img.default_img !==""){
                return (
                  <li key={item.param} >
                    <img 
                      src={item.img.default_img.img_url}
                      style={{width:"69px",height:"20px"}}
                      alt=""/>
                  </li>
                )
              }else{
                return <li key={item.param} >{item.name}</li>
              }
            })
          }
        </ul>
      </TopBarWrap>
    );
  }
}

export default TopBar;