import React from "react";
import ReactDOM from 'react-dom';
import {Card} from "react-bootstrap";
import "./newscard.css";

export default function newsCard(props){


    
    let headline = props.headline;
    let content = headline.description;
    console.log(content);
    let str="";
    if(content!=null) {str= content.slice(0, 20);}

    
    
    return (
        <div>
            <Card className="card1 news">
            <Card.Img className="ad" variant="top" src={headline.urlToImage} />
            <Card.Body>
            <Card.Title>{headline.title}</Card.Title>
            <Card.Text>
              {str}...<a href={headline.url}>Read More</a>
               
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            {headline.source.name}
            </Card.Footer>
        </Card>
        </div>
    );


}