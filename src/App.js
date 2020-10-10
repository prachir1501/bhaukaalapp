import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cricket from './cricket';
import News from './news'
import Food from './food'
import Movie from './movie'
import Footer from './footer'
import Header from './header'
import IP from "./ip"
const axios = require("axios");


var res1;
axios.get("https://api.ipify.org").then(res => {  
res1 = res.data ;
IP(res1);
});


function App() {
  return (
    <div className="App">
      <h1>Manas Branch </h1>
      <Cricket/>
      <News/>
      <Food/>
      <Movie/>
      <Footer/>
      <Header/>
    </div>
  );
}

export default App;
