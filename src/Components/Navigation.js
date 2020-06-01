import React from 'react'
import {Navbar, Form, Button, FormControl} from "react-bootstrap";
export default function Navigation() {
    return (
        <div>
    <Navbar bg="light" variant="light">
            <img
        src="/Images/BOOKSTORE_LOGO.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}
