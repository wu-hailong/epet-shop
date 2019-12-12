import React, { Component } from 'react';

import { TopWrap } from "./stlyleSelection"

import TopBar from "./TopBar"
import TopSearch from "./TopSearch"
class TopMenu extends Component {
  render() {
    return (
      <TopWrap {...this.props}>
          <TopSearch></TopSearch>
          <TopBar {...this.props}></TopBar>
      </TopWrap>
    );
  }
}

export default TopMenu;