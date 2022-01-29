//import React, {Component} from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Nav from './components/Nav';
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./styles/main.css"
import MainPage from './pages/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<Index />}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
