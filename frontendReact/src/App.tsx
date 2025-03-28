import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './paginas/login/login';
import Cadastro from './paginas/cadastro/cadastro';
import Home from './paginas/index/index';
import RecuperacaoSenha from './paginas/recuperação/recuperação';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperação" element={<RecuperacaoSenha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
