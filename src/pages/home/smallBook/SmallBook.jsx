import React , { Component } from "react"
import CommonHeader from "components/header/CommonHeader"
import Search from "components/search/Search"
import ContentList from "./ContentList"
import positionIco from "assets/images/position.png"
import downIco from "assets/images/down.png"
import { HeadSearch ,HeadSearchWrap,MenuWrap} from "./smallBookStyled"
class SmallBook extends Component {
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
            <li>收藏</li>
            <li className="active">推荐</li>
            <li>达人测评</li>
            <li>养宠视频</li>
          </MenuWrap>
       </HeadSearch>
        <ContentList></ContentList>
    </>

  }
}

export default SmallBook