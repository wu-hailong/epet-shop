import React, { Component } from 'react';
import { connect } from "react-redux"
import { GETDATA } from "../action-types"

import { ClassificationWrap } from "./classifyStyled"
import KindDetail from "./KindDetail"

const mapState = state=>({
    data:state.home.list
})
const mapDispatch = dispatch=>({
  loadData({url,params}){
    dispatch({
      type:GETDATA,
      url,
      params
    })
  }
})

@connect(mapState,mapDispatch)
class Classification extends Component {
  componentDidMount(){
    const url = "/v3/goods/category/main.html"
    let params = {
      pet_type: "dog",
      version: 358,
      system: "wap",
      isWeb: 1,
      distinct_id: "16e64c78ae5184-01373374343693-67e1b3f-1327104-16e64c78ae6653",
      _: 1575984932789
    }
    this.props.loadData({url,params})
  }
  render() {
    // console.log(this.props.data.categorys)
    return (
      <ClassificationWrap>
        <div className="slider">
          <ul>
            {this.props.data.categorys &&
              this.props.data.categorys.map(item=>{
                return <li key={item.cateid} >{item.name}</li>        
              })
            }
            {/* <li className="active">为您推荐</li>
            <li>为您推荐</li> */}
    
          </ul>
        </div>
        <div className="kind-con">
          <div></div>
          <KindDetail></KindDetail>
          <KindDetail></KindDetail>
        </div>
      </ClassificationWrap>
    );
  }
}

export default Classification;