import React, { Component } from 'react';

import { TopWrap } from "./stlyleSelection"

import TopBar from "./TopBar"
import Search from "components/search/Search"
class TopMenu extends Component {
  render() {
    return (
      <TopWrap {...this.props}>
          <Search
            searchType="sele"
            sty = {this.props.sty}
          ></Search>
          <TopBar {...this.props}></TopBar>
      </TopWrap>
    );
  }
}

export default TopMenu;