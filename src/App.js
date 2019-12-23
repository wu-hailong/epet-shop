import React from 'react';
import store from "store/"
import { Provider } from "react-redux"
import { BrowserRouter as Router , Switch ,Route ,Redirect} from "react-router-dom"
import Layout from "pages/home/Layout"
import Search from "pages/search/Search"
import GoodsList from 'pages/goodslist/GoodsList'
import ArticleList from 'pages/search/ArticleList'
import GoodsDetail from 'pages/detail/GoodsDetail'
import BookDetail from 'pages/detail/BookDetail'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/home"
            component={Layout}
          />
          <Route
          path="/articlelist"
          component={ArticleList}
          />
          <Route
            path="/search"
            component={Search}
          />
          <Route
            path="/goodslist"
            component={GoodsList}
          />
          <Route
            path="/goodsdetail"
            component={GoodsDetail}
          />
          <Route
            path="/bookdetail"
            component={BookDetail}
          />
          <Redirect
            from="/"
            to="/home"
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
