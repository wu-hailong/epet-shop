import React from 'react';
import store from "store/"
import { Provider } from "react-redux"
import Layout from "pages/home/Layout"
function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  );
}

export default App;
