import './App.css';
import Cadastro from './Componentes/Cadastro.js';
import { ReactComponent as Logo } from './logo.svg';
import React from 'react';
import Imagem from './Componentes/imagem.js';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
      <Cadastro className ="App-Cadastro"/>
      <Logo className ="App-Logo"/>
      <Imagem/>
      </header>
    </div>
  );
}

export default App;
