import React, { Component } from 'react';
import CommonHeader from "components/header/CommonHeader"
import NavBar from "./NavBar"
import ListItem from "./ListItem"
import searchIco from "assets/images/search-btn.png"
import { ListWrap , SearchWrap} from "./listStyled"
import { get } from "utils/http"
import NotFind from './NotFind';
class GoodsList extends Component {
  state={
    keyword: this.props.location.state.keyword,
    list:[]
  }
  async componentDidMount(){
    let result = await get({
      url:"/v3/goods/list/main.html",
      params:{
        page: 1,
        extend_pam:`keyword:${this.state.keyword}`
      }
    })
    this.setState({
      list:result.list
    })
    console.log(result.list)
  }
  toSearch=()=>{
    this.props.history.push({
      pathname:"/search",
      state:"sele"
    })
  }
  render() {
    return (
      <ListWrap>
        <CommonHeader>商品列表</CommonHeader>
        <SearchWrap>
          <div onClick={this.toSearch}><img src={searchIco} alt=""/>{this.state.keyword}</div>
        </SearchWrap>
        <NavBar></NavBar>
        { this.state.list.length !== 0
          ? <ul className="list">
              {
                this.state.list.map(item=>{
                  return <ListItem key={item.gid} {...item}></ListItem>
                })
              }
            </ul>
          : <NotFind keyword={this.state.keyword}></NotFind>
        }
      </ListWrap>
    );
  }
}

export default GoodsList;