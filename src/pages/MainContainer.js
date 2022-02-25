import React, {useState} from 'react';
import logo from '../resource/img/logo.svg';
import '../styles/App.css';
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
