import React from "react";
import ReactDOM from 'react-dom';
import {Card} from "react-bootstrap";

export default function cardFood(props)
{
    console.log("hello"+props.rest);
    let r= props.rest.restaurant;
    return (
        <div>
            <Card className="card1">
            <Card.Img className="ad" variant="top" src={r.featured_image}  />
            <Card.Body>
            <Card.Title>{r.name}</Card.Title>
            <Card.Text>
              
               Average Cost :RS {r.average_cost_for_two}<br/>

               
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            Customer Review: {r.user_rating.aggregate_rating}
            </Card.Footer>
        </Card>
        </div>
    );
}