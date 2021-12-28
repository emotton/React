import React from 'react';
import Exemplo from './components/Exemplo';
import ExemploClass from './components/ExemploClass';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>React funcionando</h1>
        <Header title="Cabeçalho" subtitle="Eduardo Motton">
          <h5>Não faço parte do Header</h5>
          <Menu />
        </Header>
        <Exemplo />
        <ExemploClass texto="testando classe" />
    </div>
  );
}

export default App;
