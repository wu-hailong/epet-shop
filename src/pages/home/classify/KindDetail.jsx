import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { KindDetailWrap } from "./classifyStyled"
import BrandItem from "./BrandItem"
@withRouter
class KindDetail extends Component {
  handleClick = (id_param) => ()=>{
    console.log()
    let cateid = id_param.split("_")[1]
    this.props.history.push({
      pathname:"/goodslist",
      state:{
        cateid
      }
    })
  }
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
                    <li key={item.id_param}  onClick={this.handleClick(item.id_param)}>
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