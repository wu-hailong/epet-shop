import React, { Component } from 'react';
import CommonHeader from "components/header/CommonHeader"
import NavBar from "./NavBar"
import searchIco from "assets/images/search-btn.png"
import { ListWrap , SearchWrap} from "./listStyled"
import { get } from "utils/http"
class GoodsList extends Component {
  state={
    keyword: this.props.location.state.keyword
  }
  async componentDidMount(){
    let result = await get({
      url:"/v3/goods/list/main.html",
      params:{
        page: 1,
        extend_pam:`keyword:${this.state.keyword}`
      }
    })
    console.log(result)
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
        <ul className="list">
          <li>

          </li>
        </ul>
      </ListWrap>
    );
  }
}

export default GoodsList;