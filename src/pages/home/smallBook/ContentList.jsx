import React, { Component } from 'react';
import { ContentListWrap } from "./smallBookStyled"
import starIco from "assets/images/star.png"
class ContentList extends Component {
  render() {
    // console.log(this.props)
    let dataSources = this.props
    let itemData=[] , imgData ,  menuData
    Object.keys(dataSources).forEach(item=>{     
        switch(dataSources[item].type){
          case 2 : menuData = dataSources[item]
            break;
          case 1 : itemData.push(dataSources[item])
            break;
          case 3 : imgData = dataSources[item]
            break;
          default: break;
        }
    })
      console.log(menuData)
      console.log(itemData)
      console.log(imgData)

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
                  return (
                    <li key={item.data.id}>
                      <div className="list-item">
                        <div  className="item-content">
                          <div>
                            <img src={item.data.cover.img_url} alt=""/>
                          </div>
                          <div>
                            <h3>{item.data.title}</h3>
                            <p>{item.data.describe}</p>
                          </div>
                        </div>
                        <div className="author-msg">
                          <div>
                            <img src={item.data.user.avatar.img_url} alt=""/>
                            <span>{item.data.user.username}</span>
                          </div>
                          <div>
                            <img src={starIco} alt=""/>
                            <span>{item.data.favnums}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
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
      </ContentListWrap>
    );
  }
}

export default ContentList;