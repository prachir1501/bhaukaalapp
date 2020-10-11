import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar,Nav} from 'react-bootstrap'


function Header()
{
    return (
        
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">BHAUKAAL</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cricket">Cricket</Nav.Link>
      <Nav.Link href="/food">Food</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
    </Nav>
    
  </Navbar>


    );
}

export default Header;