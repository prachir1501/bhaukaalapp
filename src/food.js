import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Grid ,Row , Col } from 'react-bootstrap';
import Cardfood from "./cardfood";
import "./cardfood.css";
const axios = require("axios");
const api = "297d258328438502d78a591e9d1d4c80";
const endpoint = "https://developers.zomato.com/api/v2.1/geocode?";
const headers = {
    'Accept': 'application/json',
    'user-key': '297d258328438502d78a591e9d1d4c80',
  };
 

function Food(props)
{
   const lat = props.location.lat;
   const lon = props.location.lon;
   const [rest,setRest] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(()=>{
       async function populate (){
           let response = await axios.get(endpoint+"lat="+lat+"&lon="+lon,{headers});
           console.log(response.data.nearby_restaurants);
           setRest(response.data.nearby_restaurants)
            setIsLoaded(true);
       }
       populate();

   },[]);


   

    return (
        <div >
            <br/>
            <h1>Restaurants Near You</h1>
            <br/>
            
            <div className = "container">
              <div className = "row">
              {rest.map(function(r,index){
                 if(index<=2)
                 {
                     return (
                         <div className = "col-lg-4">
                             <Cardfood rest={r}>

                             </Cardfood>

                         </div>
                     );
                 }


              })}

              </div>
              <div className = "row">
              {rest.map(function(r,index){
                 if(index>2 && index<=5)
                 {
                     return (
                         <div className = "col-lg-4">
                             <Cardfood rest={r}>

                             </Cardfood>

                         </div>
                     );
                 }


              })}

              </div>
              <div className = "row">
              {rest.map(function(r,index){
                 if(index>5 && index<9)
                 {
                     return (
                         <div className = "col-lg-4">
                             <Cardfood rest={r}>

                             </Cardfood>

                         </div>
                     );
                 }


              })}

              </div>


            </div>
           
             
        
        </div>

       
    );
}

export default Food;