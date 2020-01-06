import React from 'react';
import logo from './logo.svg';

import NewsApp from './Components/NewsApp';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
      </header>
      <div>
        <NewsApp />
      </div>
    </div>
  );
}

export default App;
