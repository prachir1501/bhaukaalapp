import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';


import {Card, ListGroup,ListGroupItem} from 'react-bootstrap'

import axios from 'axios';


function CricketScore(props)
{
    const [stat, setStat] = useState("");
    const [score, setScore] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {


        axios.post('https://cricapi.com/api/cricketScore/', {
                    apikey: 'EqbwQ7I0Q8e5B2Coadzpmv3zKFu2' ,
                    unique_id: props.unique_id ,
                  })
                  .then((response) => {

                    
                    setScore(response.data.score);
                    setDesc(response.data.description);

                    setStat(response.data.stat)

                    
                    
                  }, (error) => {
                    console.log(error);
                  });


    
    
          }, [])

    
    return(
        
        <div>
        <Card.Text>
            {stat}
        </Card.Text>

        <Card.Text>
            {score}
        </Card.Text>

        </div>







    )



    



}


export default CricketScore;