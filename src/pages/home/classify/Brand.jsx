import React, { Component } from 'react';
import { get } from "utils/http"
import { BrandWrap } from "./classifyStyled"
import BrandItem from "./BrandItem"
import { ActivityIndicator } from "antd-mobile"

class Brand extends Component {
  state={
    brandList:[]
  }
  async componentDidMount(){
    let result =await get({
      url:"/v3/brand/list/main.html",
      params:{
        pet_type: 'dog'
      }
    })
    this.setState({
      brandList:result.brand
    })
  }
  render() {
    return (
      <>
        {  this.state.brandList.length !== 0
          ? <BrandWrap>
              {
                this.state.brandList.map(item=>{
                return (
                  <div
                  key={item.title}
                  >
                  <div className="title">—— {item.title} ——</div>
                    <ul>
                      {
                        item.list.map(value=>{
                          return <BrandItem key={value.brandid}  {...value}></BrandItem>
                          })
                        }
                    </ul>
                  </div>
                )
                })
              }
          </BrandWrap>
          : <ActivityIndicator toast text="正在加载..."/>
        }
      </>
    );
  }
}

export default Brand;