import React, { Component } from 'react';

import { KindDetailWrap } from "./classifyStyled"
import BrandItem from "./BrandItem"
class KindDetail extends Component {
  render() {

    return (
          <KindDetailWrap>
            <div>
              {this.props.title}
              <img src="http://static.epetht.com/static_wap/appmall/lib/goods/cate_right_img.png" alt=""/>
            </div>
            <ul>
              {this.props.list.map(item=>{
                if(this.props.title !== "热门品牌"){
                  return(
                    <li key={item.id_param}>
                      <img src={item.photo} alt=""/>
                      <p>{item.name}</p>
                    </li>
                  )
                }
                return <BrandItem  key={item.name} {...item}></BrandItem>
              })}
            </ul>
          </KindDetailWrap>
          )
  }
}

export default KindDetail;