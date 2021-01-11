import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout'
import Header from './containers/Header/Header'

const App = () => {
  return (
    <div className="App">
        <Header />
        <Layout />
    </div>
  );
}

export default App;
