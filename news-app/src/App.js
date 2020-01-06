import React from 'react';
import logo from './logo.svg';

import NewsApp from './Components/NewsApp';

import './App.css';

function App() {

  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6ad3a5693c1948fc80c91b0ccaf18ea9';
  var req = new Request(url);
  fetch(req)
      .then(function(response) {
          console.log(response.json());
      })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
