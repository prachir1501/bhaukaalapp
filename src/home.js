import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';

import './home.css';

import YouTube from 'react-youtube';

const opts = {
    height: '480',
    width: '854',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


function Home()
{
    return (
       
        <div>
       
        <h1>Hi there!</h1>
        <YouTube

         videoId={"xMKzdQrC5TI"} 

         opts={opts}




        />

       <h2>🔥 23.10.2020 🔥</h2>

       <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/30/928296-fotojet-25.jpg"
       
        alt="poster"

        width={854}

        height={480}

       ></img>

        </div>
        

        
    )
}

export default Home;