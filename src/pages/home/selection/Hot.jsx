import React, { Component } from 'react';

import {HotWrap ,ItemWrap} from "./stlyleSelection"
import HotItem from "./HotItem"
class Hot extends Component {
  render() {
    // console.log(this.props)
    return (
      <HotWrap> 
       <div>
         {
           this.props.hotData.berserk ? (
            <>
              <div className="panic-buy">
                  <div>
                    <img src={this.props.hotData.berserk.left.img_url} alt=""/>
                    <div className="label-wrap">
                    <span>{this.props.hotData.berserk.title}</span>
                    <span>{this.props.hotData.berserk.stateTitle}</span>
                    </div>
                  </div>
                  <ItemWrap>
                    {
                      this.props.hotData.berserk.goods.map(item=>{
                          return <HotItem key={item.gid} item={item}></HotItem>
                      })
                    }
                  </ItemWrap>
              </div>
              <div className="assemble-buy">
                  <div>
                    <img src={this.props.hotData.egroup.left.img_url} alt=""/>
                  </div>
                  <ItemWrap>
                    {
                      this.props.hotData.egroup.goods.map(item=>{
                          return <HotItem key={item.gid} item={item}></HotItem>
                      })
                    }
                  </ItemWrap>
              </div>
            </>
          ):null
         }
       </div>
      </HotWrap>
    );
  }
}

export default Hot;