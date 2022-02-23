//import React, {Component} from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// pages line
import Index from './pages/Index';
import Login from './pages/Login';
import MainPage from './pages/Main';
import JoinUs from './pages/Joinus';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// css line
import "./styles/main.css"
import "./styles/login.css"
// components
//import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar>
        안녕하세요 OOO님
      </Sidebar>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<Index />}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/joinus" element={<JoinUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
