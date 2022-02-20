import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../components/Sidebar';
import MainPage from './Main';
import axios from 'axios';

axios.defaults.withCredentials = true;

function IndexPage() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );

}

export default IndexPage;
