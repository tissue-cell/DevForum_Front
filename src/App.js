import React, {Component} from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
