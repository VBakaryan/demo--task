import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout'
import Product from './containers/Products/Products';
import Auth from './containers/Auth/Auth';
import Header from './containers/Header/Header'

const App = () => {
  return (
    <div className="App">
        <Header />
        <Layout> 
           <Auth />
           <Product />
        </Layout> 
    </div>
  );
}

export default App;
