import React from 'react';
import Card from './components/Card.js';
import Card2 from './components/Card2.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card img="https://picsum.photos/200/300">
        <p>Card body</p>
      </Card>

      <Card img="https://picsum.photos/200">
        <p>Card body</p>
      </Card>

      <Card2 img="https://picsum.photos/200/300">
        <p>Card body</p>
      </Card2>

      <Card2 img="https://picsum.photos/200">
        <p>Card body</p>
      </Card2>
    </div>
  );
}

export default App;
