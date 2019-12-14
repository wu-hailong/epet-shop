import React from 'react';
import store from "store/"
import { Provider } from "react-redux"
import { BrowserRouter as Router , Switch ,Route ,Redirect} from "react-router-dom"
import Layout from "pages/home/Layout"
import Search from "pages/search/Search"
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
            path="/search"
            component={Search}
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
