import React , { Component } from "react"

import Header from "./Header"
import Classification from "./Classification"
import Brand from "./Brand"
import { ClassifyWrap ,ContentWrap} from "./classifyStyled"
import { Route , Switch , Redirect} from "react-router-dom"
class Classify extends Component {
  render(){
    return (
    <ClassifyWrap>
      <Header></Header>
      <ContentWrap>
        <Switch>
          <Route 
            path='/category'
            component={Classification}
          />
          <Route 
            path="/brand"
            component={Brand}
          />
          <Redirect
            from='/'
            to='/category'
          />
        </Switch>
      </ContentWrap>
    </ClassifyWrap>
    )
  }
}

export default Classify