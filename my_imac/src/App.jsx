import React from 'react';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/page/home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrapper">
        <Home />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
