import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import './cricket.css'

import {Card, ListGroup,ListGroupItem, CardDeck, CardGroup} from 'react-bootstrap'

import CricketScore from './cricketscore'

import axios from 'axios';

import csk from './Chennai Super Kings.jpg';
import dc from './Delhi Capitals.jpg';
import rcb from './Royal Challengers Bangalore.jpg';
import rr from './Rajasthan Royals.png';
import mi from './Mumbai Indians.jpg';
import kxip from './Kings XI Punjab.jpg';
import srh from './Sunrisers Hyderabad.jpg';
import kkr from './Kolkata Knight Riders.jpg';


let teams=["Mumbai Indians","Sunrisers Hyderabad","Royal Challengers Bangalore","Delhi Capitals","Rajasthan Royals","Kolkata Knight Riders","Kings XI Punjab","Chennai Super Kings"]

let logos=[mi,srh,rcb,dc,rr,kkr,kxip,csk];






 


function Cricket()
{
    const [iplselect, setItems] = useState([]);
    



    useEffect(() => {


    axios.post('https://cricapi.com/api/matches/', {
        apikey: 'EqbwQ7I0Q8e5B2Coadzpmv3zKFu2',
     
      })
      .then((response) => {
        //console.log(response.data.matches);
    
        let matches= response.data.matches;
    
        let iplmatches=[];

        
    
        
    
        matches.map(match=>{
    
    
            if(teams.indexOf(match["team-1"])!=-1)
            {
                
                
                iplmatches.push(match);

                

            }

            
    
    
    
        })
    
        
    
        setItems(iplmatches);

        


       
    
        
    
        
    
    
    
      }, (error) => {
        console.log(error);
      });
    

     
     

    
        



      }, [])

   


  console.log(iplselect);
  console.log("hello");
  

  
  



  return (

    <div>

    

      <h1 style={{textAlign:"center"}}>Live IPL Matches</h1>

      <div className="row">

      

      {iplselect.map(match=>{


          if(match.matchStarted&&!match.winner_team)
          {





            return(

                
                
                <Card border="success" style={{ width: '25rem'}}>
                <Card.Img variant="top" src="https://images.moneycontrol.com/static-mcnews/2020/09/IPL-2020-770x433.jpg?impolicy=website&width=770&height=431" />
                <Card.Body>
                    <Card.Title>{match["team-1"]+" v/s "}</Card.Title>
                    <Card.Title>{match["team-2"]}</Card.Title>
                    
                    <CricketScore unique_id={match.unique_id} />

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{match.toss_winner_team+" won the toss"}</ListGroupItem>
                    
                </ListGroup>
                
                </Card>

               
           
           
        );

          }



        





      })}

      </div>

      
      <h1 style={{textAlign:"center"}}>Recent IPL Matches</h1>

      <div className="row">

      {iplselect.map(match=>{


        if(match.matchStarted&&match.winner_team)
{





  return(

      
      
      <Card border="success" style={{ width: '25rem'}}>
      <Card.Img variant="top" src="https://images.moneycontrol.com/static-mcnews/2020/09/IPL-2020-770x433.jpg?impolicy=website&width=770&height=431" />
      <Card.Body>
          <Card.Title>{match["team-1"]+" v/s "}</Card.Title>
          <Card.Title>{match["team-2"]}</Card.Title>
          
          <CricketScore unique_id={match.unique_id} />

      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroupItem>{match.toss_winner_team+" won the toss"}</ListGroupItem>
          
      </ListGroup>
      
      </Card>

     
 
 
);

}









})}

      </div>

      

      <h1 style={{textAlign:"center"}}>Upcoming IPL Matches</h1>

      <div className="row">

      

      {iplselect.map(match=>{


if(!match.matchStarted)
{





  return(

           
      <Card border="success" style={{ width: '25rem'}}>
      <Card.Img variant="top" src={logos[teams.indexOf(match["team-1"])]} />
      <Card.Body>
          <Card.Title>{match["team-1"]+" v/s "}</Card.Title>
          <Card.Title>{match["team-2"]}</Card.Title>
          
          <Card.Text>
              {match.dateTimeGMT[12]==4? "Starts at 7:30 PM" : "Starts at 3:30 PM" }
          </Card.Text>

      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroupItem>{"On "+ match.dateTimeGMT[8]+match.dateTimeGMT[9]+"-"+match.dateTimeGMT[5] + match.dateTimeGMT[6]+"-2020" }</ListGroupItem>
          
      </ListGroup>
      
      </Card>

      


     
 
 
);

}









})}

      

      </div>

      </div>
      


  )



    
}

export default Cricket;