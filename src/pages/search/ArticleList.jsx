import React , { useState,useEffect,useCallback } from 'react';
import CommonHeader from "components/header/CommonHeader"
import NotFind from 'components/404/NotFind'
import BookItem from "components/bookitem/BookItem"
import { post } from "utils/http"
import { stringify } from "querystring"
import { ActivityIndicator } from "antd-mobile"
import { SearchWordWrap , ListWrap} from "./searchStyled"
import searchIco from "assets/images/search-btn.png"
import { withRouter } from "react-router-dom"

const ArticleList = props=> {
  let [list,setList] = useState([])
  let [hasData,setHasData] = useState(true)
  let { word } = props.location.state
  let toSearch = useCallback(
    ()=>{
      props.history.push({
        pathname:"/search",
        state:"book"
      })
    },[props]
  )
  useEffect(()=>{
    async function loadData(){
      let result = await post({
        url:"/v8/content/opgc/Index.html?do=Search",
        data:stringify({
           word
        })
      })     
      if(result.data.length === 0 ){
        setHasData(false)
      }
      setList(result.data)
    }
    loadData()
  },[word,hasData])
  // console.log(list)
    return (
      <>
        <CommonHeader>小萌书</CommonHeader>
        <SearchWordWrap>
          <div onClick={toSearch}><img src={searchIco} alt=""/>{word}</div>
        </SearchWordWrap>
          { list.length !== 0 
          ? <ListWrap>
              {
                list.map(item=>{
                  return <BookItem key={item.data.id} {...item}></BookItem>
                })
              }
            </ListWrap>
          : hasData ? <ActivityIndicator toast text="正在加载..." /> : <NotFind keyword={word}></NotFind> 
          }  
      </>
    )
}

export default withRouter(ArticleList)