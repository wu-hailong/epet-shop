import React , { Component } from "react"
import CommonHeader from "components/header/CommonHeader"
import Search from "components/search/Search"
import ContentList from "./ContentList"
import EmptyCollection from "./EmptyCollection"
import positionIco from "assets/images/position.png"
import downIco from "assets/images/down.png"
import {ContentWrap, HeadSearch ,HeadSearchWrap,MenuWrap,LoadWrap} from "./smallBookStyled"
import { connect } from "react-redux"
import { GETBOOKDATA } from "../action-types"
import { ActivityIndicator } from 'antd-mobile'
const mapState = state=>({
  data:state.getIn(["home","bookData"])
})
const mapDispatch= dispatch=>({
  loadData({url , params}){
    dispatch({
      type:GETBOOKDATA,
      url,
      params
    })
  }
})

@connect(mapState , mapDispatch)
class SmallBook extends Component {
  state={
    abso:false
  }
  async componentDidMount(){
    let url = "/v3/content/opgc/Index.html"
   
    let params={
        do: 'GetList',
        param: 0,
        page: 1,
        pet_type: 'dog'
      }
    // console.log(result)
    this.props.loadData({url,params})
  }
  handleClick =(param)=>()=>{
    this.props.loadData({
      url:"/v3/content/opgc/Index.html",
      params:{
        do: 'GetList',
        param,
        page: 1,
        pet_type: 'dog'
      }
    })
  }
  handleScroll=(e)=>{
    let {scrollTop} = e.currentTarget
    if(scrollTop > 50){
      this.setState({
        abso:true
      })
    }else{
      this.setState({
        abso:false
      })
    }
  }

  render(){
    let { column : menuList} = this.props.data.data || {column:[]}
    let { list } = this.props.data.data || {list:[]}
    return  <ContentWrap onScroll={this.handleScroll}>
              <CommonHeader>小萌书</CommonHeader>
              <div className="search-wrap">
                <HeadSearch
                  borderWidth="0 0 1px 0"
                  borderColor="#F3F4F5"
                  className={this.state.abso ? "abso" : ""}
                >
                    <HeadSearchWrap>
                      <div>
                        <img className="position" src={positionIco} alt=""/>
                        <span>狗狗</span>
                        <img className="down" src={downIco} alt=""/>
                      </div>
                      <Search
                        searchType="book"
                      ></Search>
                    </HeadSearchWrap>
                    <MenuWrap>
                      {
                        menuList.map(item=>{
                      return  <li 
                                key={item.param} 
                                className={item.check===1 ? "active" : ""}
                                onClick={this.handleClick(item.param)}
                                >
                                  {item.name}
                              </li>
                        })
                      }
                    </MenuWrap>
                </HeadSearch>
              </div>
              {list.length !== 0
              ? <ContentList {...list}></ContentList>
              : this.props.data.data ? <EmptyCollection></EmptyCollection> : <LoadWrap><ActivityIndicator  text="loading..."/></LoadWrap>
              }
          </ContentWrap>
  }
}

export default SmallBook