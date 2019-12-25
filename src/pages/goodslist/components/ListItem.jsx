import React, { Component } from 'react';
import { ListItemWrap } from "./listStyled"
import { withRouter } from "react-router-dom"
import cartIco from "assets/images/cart-ico.png"

@withRouter
class ListItem extends Component {
  goToDetail = (gid)=>()=>{
    console.log(gid)
    this.props.history.push({
      pathname:"/goodsdetail",
      state:{
        gid
      }
    })
  }
  addToCart = (gid)=>(e)=>{
    e.stopPropagation()
    console.log("加入购物车")
  }
  render() {
    return (
      <ListItemWrap
        borderWidth="0 0 1px 0"
        borderColor="#e7e7e7"
        onClick={this.goToDetail(this.props.gid)}
       >
        <div>
          <img src={this.props.photo} alt=""/>
          { this.props.country_photo !== "" &&
            <div className="country">
              <img src={this.props.country_photo} alt=""/>
            </div>
          }
          {this.props.cover_img_for_notice.img_url && 
            <div className="cover">
              <img src={this.props.cover_img_for_notice.img_url} alt=""/>
            </div>
          }
        </div>
        <div>
          <h3>{this.props.subject}</h3>
          <div className="labels">
            { this.props.activityLabels.length !== 0 && 
              this.props.activityLabels.map(item=>{
                return <img key={item.image} src={item.image} alt=""/>
              })
            }
          </div>
          <div className="price">¥<span>{this.props.sale_price}</span> <span>{this.props.dprice}</span></div>
          <div className="comments"><span>{this.props.comments}</span> <span>{this.props.sold}</span></div>
          <div className="cart"><img src={cartIco} alt="" onClick={this.addToCart(this.props.gid)}/></div>
        </div>
      </ListItemWrap>
    )
  }
}

export default ListItem