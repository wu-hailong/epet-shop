import React, { Component } from 'react';
import SearchGoods from "./SearchGoods"
import SearchArticle from "./SearchArticle"
import { withRouter } from "react-router-dom"
@withRouter
class Search extends Component {
  render() {
    return this.props.location.state === "sele" ? <SearchGoods></SearchGoods> : <SearchArticle></SearchArticle>
  }
}

export default Search;