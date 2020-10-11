import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

function Foodforthought()
{

    const [thought, setThought] = useState("");

    useEffect(() => {


        axios.get('http://api.quotable.io/random')
        .then((response) => {
            console.log(response.data.content);

            setThought(response.data.content);
        });


            
    
    
    
          }, [])

    return (
       
        <div>

        <h1 style={{textDecoration:"underline"}}>Thought of The Moment</h1>
       
        <h2>{thought}</h2>

        <img src="https://picsum.photos/400" alt='error'></img>

        </div>
    )



}

export default Foodforthought;