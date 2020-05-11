import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">

      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1" Red>X</Card>
        <Card title="Card 1" Green>X</Card>        
      </div>
      <div className="linha">
      <Card title="Card 2" Blue>Y</Card>
      <Card title="Card 2" Purple>Y</Card>        
      </div>

    </div>
  );
}

export default App;
