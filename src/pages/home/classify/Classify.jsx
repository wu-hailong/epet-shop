import React , { Component } from "react"

import Header from "./Header"
import Classification from "./Classification"

import { ClassifyWrap ,ContentWrap} from "./classifyStyled"

class Classify extends Component {
  render(){
    return (
    <ClassifyWrap>
      <Header></Header>
      <ContentWrap>
        <Classification></Classification>
      </ContentWrap>
    </ClassifyWrap>
    )
  }
}

export default Classify