import React from 'react';
import {Col, Row, Button, Navbar, Nav,NavDropdown, Form, FormControl, FormLabel, Container} from "react-bootstrap";

function Header()
{
    return(
	<>

<Navbar bg="success" variant="success">
     <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
    <Navbar.Brand href="#home">MediBhai</Navbar.Brand>
    <Nav className="mr-auto">
   
	  <NavDropdown title="Location" id="basic-nav-dropdown">
	
	  <Form  className="mt-4" className="justify-content-center">
	  <Form.Group controlId="formBasicPassword">
	  <Form.Label>Add your location</Form.Label>
      <FormControl type="text" placeholder="Search for location" className="mr-sm-2" />
	  </Form.Group>
	  <NavDropdown.Divider />
      <Button variant="outline-info" type="submit">Submit</Button>
    </Form>
	  
       
      </NavDropdown>

     </Nav>

	 <Nav className="justify-content-end" >
    
	<NavDropdown title="Login" id="basic-nav-dropdown" className="m-auto">
	  <Container  
	  width="3000">
	 

	  <Form className="px-4 py-3">
  <Form.Group as={Row}  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

	    </Container>
       
      </NavDropdown>

      <Nav.Link href="#pricing">Cart</Nav.Link>
	  </Nav>
  </Navbar>
  

    </>);
}
export default Header;