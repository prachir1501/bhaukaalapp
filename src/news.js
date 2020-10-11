import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const api ="640b658659984fbcbd3ad548f74df504";
const axios = require("axios")
const endpoint = "https://newsapi.org/v2/top-headlines?country=in"

function News(props)
{
    const [headlines,setHeadlines]=useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sports,setSports]=useState([]);
    const [tech,setTech]=useState([]);
    const [health,setHealth]=useState([]);

    useEffect(()=>{
      
       
        async function populate(){
            let response1 = await axios.get(endpoint+"&apiKey="+api);
            // console.log(response1);
            setHeadlines(response1.data.articles);
            console.log(response1.data.articles);
            let response2 = await axios.get(endpoint + "&category=sports" + "&apiKey=" + api);
            setSports(response2.data.articles);
            console.log(response2.data.articles);

            let response3 = await axios.get(endpoint + "&category=technology" + "&apiKey=" + api);
            setTech(response3.data.articles);
            console.log(response3.data.articles);

            let response4 = await axios.get(endpoint + "&category=health" + "&apiKey=" + api);
            setHealth(response4.data.articles);
            console.log(response4.data.articles);
           

            setIsLoaded(true);

        }
        populate();


    },[]);

    if(!isLoaded)
    {
        return <div>loading</div>
    }
    else{
    return (
        <div>
            <h1>Headlines {headlines[0].title}</h1>
            <h1>Tech {tech[0].title}</h1>
            <h1>sports {sports[0].title}</h1>
           <h1>Health {health[0].title}</h1>

        </div>
    
    );
    }
}

export default News;