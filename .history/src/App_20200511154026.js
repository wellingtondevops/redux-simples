import React from 'react';
import './App.css';
import Card from './components/Card'
import Intervalo from './components/Intervalo'

function App() {
  return (
    <div className="App">

      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo ></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 1" Green>X</Card>
        <Card title="Card 2" Blue>Y</Card>
        <Card title="Card 2" Purple>Y</Card>
      </div>

    </div>
  );
}

export default App;
