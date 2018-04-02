import React, { Component } from 'react';
import './App.css';
import Sold from './components/Sold'
import Listed from './components/Listed'
import Map from './components/Map'
import Query from './components/Query'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>eBay Inventory Manager</h1>
        </header>
        <main>
          <Sold />
          <Listed />
          <Map />
          <Query />
        </main>
      </div>
    );
  }
}

export default App;
