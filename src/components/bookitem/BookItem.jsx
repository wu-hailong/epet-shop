import React from "react"
import starIco from "assets/images/star.png"
import { BookItemWrap } from "../styled/commonStyled"

export default props=>{
  return (
    <BookItemWrap >
      <div className="list-item">
        <div  className="item-content">
          <div>
            <img src={props.data.cover.img_url} alt=""/>
          </div>
          <div>
            <h3>{props.data.title}</h3>
            <p>{props.data.describe}</p>
          </div>
        </div>
        <div className="author-msg">
          <div>
            <img src={props.data.user.avatar.img_url} alt=""/>
            <span>{props.data.user.username}</span>
          </div>
          <div>
            <img src={starIco} alt=""/>
            <span>{props.data.favnums}</span>
          </div>
        </div>
      </div>
    </BookItemWrap>
  )
}