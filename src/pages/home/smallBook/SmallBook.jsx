import React , { Component } from "react"
import CommonHeader from "components/header/CommonHeader"
import Search from "components/search/Search"
import ContentList from "./ContentList"
import positionIco from "assets/images/position.png"
import downIco from "assets/images/down.png"
import { HeadSearch ,HeadSearchWrap,MenuWrap} from "./smallBookStyled"
import { get } from "utils/http"
class SmallBook extends Component {
  state={
    menuList:[],
    list:[]
  }
  async componentDidMount(){
    let result = await get({
      url:"/v3/content/opgc/Index.html",
      params:{
        do: 'GetList',
        param: 0,
        page: 1,
        pet_type: 'dog',
        system: 'wap',
        isWeb: 1,
        version: 303,
        distinct_id: '16e64c78ae5184-01373374343693-67e1b3f-1327104-16e64c78ae6653'
      }
    })
    // console.log(result)
    this.setState({
      menuList:result.data.column,
      list:result.data.list
    })
  }
  handleClick =(param)=>()=>{
      console.log(param)
  }
  render(){
    return <>
       <CommonHeader>小萌书</CommonHeader>
       <HeadSearch
        borderWidth="0 0 1px 0"
        borderColor="#F3F4F5"
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
              this.state.menuList.map(item=>{
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
        <ContentList {...this.state.list}></ContentList>
    </>

  }
}

export default SmallBook