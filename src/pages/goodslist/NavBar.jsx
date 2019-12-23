import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { NavBarWrap ,SortListWrap } from "./listStyled"
import { connect } from "react-redux"
import { GETSORTDATA } from "./action-types"
const mapDispatch = dispatch=>{
  return {
    loadData({url,params}){
      dispatch({
        type:GETSORTDATA,
        url,
        params
      })
    }
  }
}

@connect(null,mapDispatch)
class NavBar extends Component {
  state={
    isShow:false,
    orderby:"def_desc"
  }
  showSecMenu= ()=>{
     this.setState({
       isShow:!this.state.isShow
     })
  }
  loadData(params){
    let url = "/v3/goods/list/main.html"
    this.props.loadData({url,params})
  }
  checked = (orderby) => ()=>{
    this.loadData({
      page:1,
      extend_pam: this.props.keyword === "" ? "" : `keyword:${this.props.keyword}`,
      cateid: this.props.keyword === "" ? this.props.cateid : "",
      orderby
    })
    this.setState({
      orderby,
      isShow:false
    })
    
  }
  sortSoldCount = ()=>{
    this.loadData({
      page:1,
      extend_pam: this.props.keyword === "" ? "" : `keyword:${this.props.keyword}`,
      cateid: this.props.keyword === "" ? this.props.cateid : "",
      orderby:"sold_desc"
    })
    this.setState({
      orderby:"sold_desc",
      isShow:false
    })
    
  }
  render() {
    let checkList  = {
      "def_desc":"默认",
      "views_desc":"人气",
      "lastupdate_desc":"最新",
      "replys_desc":"评论"
    }
    return (
      <>
      <div style={{height:"40px"}}>
        <NavBarWrap
          borderWidth="1px 0 1px 0"
          borderColor="#e7e7e7"
        >
            <li onClick={this.showSecMenu} 
            className={this.state.orderby !== "sold_desc"
            ? "active" 
            : "" 
            }>
              {
                this.state.orderby === "sold_desc" 
                ? "默认"
                : Object.keys(checkList).map(key =>{
                  if(key === this.state.orderby){
                    return checkList[key]
                  }
                  return null
                })    
              }
              <Icon type="down"/>
            </li>
            <li onClick={this.sortSoldCount} className={this.state.orderby === "sold_desc" ? "active" : ""}>销量</li>
            <li className="active down">价格<span></span></li>
            <li >筛选<span></span></li>
        </NavBarWrap>
      </div>
      { this.state.isShow &&
        <SortListWrap>
          <div onClick={this.checked("def_desc")}  className={this.state.orderby === "def_desc" ? "active" : ""}>
            默认排序
          </div>
          <div onClick={this.checked("views_desc")} className={this.state.orderby === "views_desc" ? "active" : ""}>
            按人气
          </div>
          <div onClick={this.checked("lastupdate_desc")} className={this.state.orderby === "lastupdate_desc" ? "active" : ""}>
            最新上架
          </div>
          <div onClick={this.checked("replys_desc")} className={this.state.orderby === "replys_desc" ? "active" : ""}>
            按评论
          </div>
        </SortListWrap>
      }
      </>
    );
  }
}

export default NavBar