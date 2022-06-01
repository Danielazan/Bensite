import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.css'
import { Button, Navbar, Container,Nav, NavDropdown,Row, Col,Offcanvas,Form,FormControl } from 'react-bootstrap';

import Ccrn from './landimg/ccrn.jpg'

function logo() {
  return (
    <Container  className='logo' fluid >
    <>
  {[ 'md', ].map((expand) => (
    <Navbar key={expand}   expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#"><img
        alt=""
        src={Ccrn}
        width="30"
        height="30"
        className="d-inline-block align-top mr-4"
      />{' '} Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body bg='dark'>
            <Nav  className="justify-content-end flex-grow-1 pe-3" >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link  className='nate' href="#action2">Link</Nav.Link>
              <Nav.Link className='nate' href="#pricing">Pricing</Nav.Link>
              <NavDropdown
                title="Dropdown"
                menuVariant='dark'
                
                id={`offcanvasNavbarDropdown-expand-${expand} `}
               
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <Nav.Link className='nate' href="#pricing">Pricing</Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
      <Container  className=' logot'>
                <Row>
                <Col md={{ span: 5, offset: 3 }}  className=" mt-12 ">
                    <h1>Catholic Charismatic Renewal of Nigeria</h1>
                        <h3>Delivered to your door, ready to eat in minutes.</h3>
                </Col>
            </Row>`
              
    </Container>
</Container>
  )
}

export default logo
