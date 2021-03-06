import React, { Component } from 'react';
import { connect } from "react-redux"

import { GETCATEGORYDATA } from "../action-types"
import { get } from "utils/http"

import { ClassificationWrap , LoadWrap} from "./classifyStyled"
import { ActivityIndicator } from "antd-mobile"
import KindDetail from "./KindDetail"
const mapState = state=>({
    data:state.getIn(["home","category"])
})
const mapDispatch = dispatch=>({
  loadData({url,params}){
    dispatch({
      type:GETCATEGORYDATA,
      url,
      params
    })
  }
})

@connect(mapState,mapDispatch)
class Classification extends Component {
  state={
    currentId:88888,
    cateMenuList:[]
  }
  async componentDidMount(){
    this.reLoadData(this.state.currentId)
    let result = await get({
      url:"/v3/goods/category/main.html",
      params:{
        pet_type: "dog"
      }
    })
    this.setState({
      cateMenuList:result.categorys
    })
  }
  handleClick=currentId=>{
    return ()=>{
      this.setState({
        currentId
      })
      this.reLoadData(currentId)
    }
  }
  reLoadData(currentId){
    let url = '/v3/goods/category/main.html'
    let params = {
      do: 'getChildren',
      owner: currentId,
      pet_type: 'dog'
    }
    this.props.loadData({url,params})
  }
  render() {
    // console.log(this.props.data.topadv)
    // console.log(this.props.data)
    return (
       <>
         {this.state.cateMenuList.length !== 0 ?
            <ClassificationWrap>
                <div className="slider">
                  <ul>
                    {this.state.cateMenuList.map(item=>{
                        return (
                          <li 
                            className={this.state.currentId === item.cateid ? "active":""}
                            key={item.cateid} 
                            onClick={this.handleClick(item.cateid)}
                            >
                            {item.name}
                          </li>
                        )    
                      })} 
                  </ul>
                </div>
              {this.props.data.code === "succeed"
              ? <div className="kind-con">
                  {this.props.data.topadv 
                    && this.props.data.topadv.src 
                    && <div className="top-img"><img src={this.props.data.topadv.src} alt=""/></div>
                  }
                  {this.props.data.cate_list.map(item=>{
                      return <KindDetail key={item.title}  {...item}></KindDetail>
                    })
                  }
                </div>
              : <LoadWrap><ActivityIndicator text="Loading..."/></LoadWrap>
              }
          </ClassificationWrap> : <ActivityIndicator toast text="正在加载..." />
         }
       </>
    );
  }
}

export default Classification;