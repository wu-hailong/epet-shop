import React, { Component } from 'react';
import { ContentListWrap , ScrollWrap } from "./smallBookStyled"
import playIco from "assets/images/play.png"
import BookItem from "components/bookitem/BookItem"


class ContentList extends Component {
  render() {
    // console.log(this.props)
    let dataSources = this.props
    let itemData=[] , imgData ,  menuData, videoData =[]
    Object.keys(dataSources).forEach(item=>{     
        switch(dataSources[item].type){
          case 2 : menuData = dataSources[item]
            break;
          case 1 : itemData.push(dataSources[item])
            break;
          case 3 : imgData = dataSources[item]
            break;
          case 4 : videoData.push(dataSources[item])
            break;
          default: break;
        }
    })
    return (
      <ContentListWrap>
        {
          menuData && 
            <li>
              <div className="img-menu">
              {
                menuData.data.map(item=>{
                  return <div key={item.img_url}><img src={item.img_url} alt=""/></div>
                })
              }
              </div>
            </li>
          }
          { itemData.length !== 0 && 
            itemData.map(item=>{
            return <BookItem key={item.data.id} {...item}></BookItem>
            })        
          }
          {
          imgData && 
          imgData.data.map(item=>{
            return (
              <li key={item.img_url}>
                <div className="img-item">
                    <img src={item.img_url} alt=""/>
                </div>
              </li>
            )
          })
          } 
          {
            videoData.length !== 0 && 
            videoData.map(item=>{
              return  (
              <li  key={item.data.title}>
                <div className="video-item">
                    <div>
                      <div></div>
                      <div>{item.data.jishu}</div>
                      <p>{item.data.title}</p>
                      <img src={item.data.cover.img_url} alt=""/>
                    </div>
                    <div>
                      <ScrollWrap>
                       { 
                         item.data.videoList.map(value=>{
                           return (
                              <div key={value.cover.img_url}>
                                <div>
                                  <img src={value.cover.img_url} alt=""/>
                                  <div><img src={playIco} alt=""/><span>{value.times}</span></div>
                                </div>
                                <p>{value.title}</p>
                              </div>
                            )
                         })
                       }
                      </ScrollWrap>
                    </div>
                </div>
              </li>)
            })
          }
      </ContentListWrap>
    );
  }
}

export default ContentList;