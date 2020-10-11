import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Cricket from './cricket';
import News from './news'
import Food from './food'
import Movie from './movie'
import {Switch,Route,Link} from "react-router-dom";

import IP from "./ip"
import { getDefaultNormalizer } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';

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
      
      
     <Switch>
       
       <Route path="/cricket"><Cricket/></Route>
       <Route path="/food"><Food location={output.data}/></Route>
       <Route path="/news"><News/></Route>
       <Route path="/"><Home/></Route> 
       {/* change <Cricket/> to <Home/> when done  */}
       
       

     </Switch>
    
    </div>
    

      
    );

  }
  

}

  


export default App;




