import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar,Nav} from 'react-bootstrap'


function Header()
{
    return (
        
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">BHAUKAAL</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Cricket</Nav.Link>
      <Nav.Link href="#pricing">News</Nav.Link>
      <Nav.Link href="#food">Food</Nav.Link>
    </Nav>
    
  </Navbar>


    );
}

export default Header;