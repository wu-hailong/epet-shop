import React from 'react';
import store from "store/"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "pages/home/Layout"
function App() {
  return (
    <Provider store={store}>
      <Router>
       <Layout></Layout>
      </Router>
    </Provider>
  );
}

export default App;
