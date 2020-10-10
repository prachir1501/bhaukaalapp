import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Cricket from './cricket';
import News from './news'
import Food from './food'
import Movie from './movie'
import Footer from './footer'
import Header from './header'
import IP from "./ip"
import { getDefaultNormalizer } from '@testing-library/react';
const axios = require("axios");


var res1;
// let output;


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [output,setOutput]=useState({});
  var country;
  useEffect(()=> {
   
    axios.get("https://api.ipify.org").then(res => {  
    res1 = res.data ;

    IP(res1).then(function(response){
       
      
      
       setOutput(response);
       setIsLoaded(true);
       
       
       
       
     });

    })

  },[])
 
  if(!isLoaded)
  {
    return <div>Loading..</div>
  }
  else{
    return (

    

      <div className="App">
       
        
    {/* <h1>{console.log(output)}Manas Branch {output.data.country} </h1> */}
        {/* <Cricket/> */}
        {/* <News location={output.data.country}/> */}
        <Food  location = {output.data}/>
        {/* <Movie/>
        <Footer/>
        <Header/> */}
      </div>
    );

  }
  



  
}

export default App;




