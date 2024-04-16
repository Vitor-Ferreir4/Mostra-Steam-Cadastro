import './App.css';
import Login from './Componentes/Login.js';
import { ReactComponent as Logo } from './logo.svg';
import React from 'react';
import Imagem from './Componentes/imagem.js';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
      <Login className ="App-Login"/>
      <Logo className ="App-Logo"/>
      <Imagem/>
      </header>
    </div>
  );
}

export default App;
