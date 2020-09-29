import React from 'react';


import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Form, FormControl, Button } from 'react-bootstrap'
import '../App.css';




function TopMenu() {
    return (


        <Navbar bg="light" variant="light" expand="lg" sticky="top" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/react/home">Home</Nav.Link>
                    <Nav.Link href="/react/about">About</Nav.Link>
                    <Nav.Link href="/react/Customer">顧客管理</Nav.Link>
                    <Nav.Link href="/react/GraphQL">GraphQL</Nav.Link>
                    <Nav.Link href="/react/UploadForm">UploadForm</Nav.Link>
                    <Nav.Link href="/react/OsmMap">OsmMap</Nav.Link>
                    <Nav.Link href="/react/TestAPI">TestAPI</Nav.Link>
                    <NavDropdown title="TestAPI" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/react/TestAPI/AgriProductsTransType">農產品交易行情</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Navbar>








    );
}

export default TopMenu;
