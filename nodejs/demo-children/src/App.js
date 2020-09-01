import React, { Component } from 'react';
import Accordion from './components/Accordion.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Accordion heading='hhhhh'>
            Hello
          </Accordion>
      </div>
    );
  }
}

export default App;
