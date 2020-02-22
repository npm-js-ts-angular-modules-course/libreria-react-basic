import React from 'react';
import './App.css';
import { HelloFC, HelloCC, CustomBox } from '@mugan86/react-basic-library';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomBox content="Anartz" bgColor="blue" width="400px" height="300px"/>
        <p>
          Anartz Mugika Ledo - mugan86@gmail.com.
        </p>
        <HelloFC name="Anartz"/>
        <HelloCC name="Holaaaaaa" lastname="hdhdhdhd"/>
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
