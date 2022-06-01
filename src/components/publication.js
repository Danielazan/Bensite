import React from 'react'
import './publication.css'
import {  Button, Container,Card, Spinner,Row, Col } from 'react-bootstrap';
import Cross from './landimg/cross4.jpg'


function Pulication() {
    return (
      
      <Container >
          <Col className=" text-center mb-4 mt-2"><h1 className="publica">RECENT <span className="pubiva">Publications</span></h1></Col>
          <Row>
            <Col sm={8} md ={9}>
                <Row>
                    <Col border="light" md={4} sm={12} className="m-0">
                        <Card border="light" className="mb-4 text-yellow">
                            <Card.Img variant="top" src={Cross} style={{ height: '10rem', width:'15rem' }} />
                            <Card.Body>
                            
                                
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={8}>
                        <Card border="light" className="m-0" style={{ height: '15rem' }}>
                                <Card.Body >
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                    <hr/>
                </Row>
            </Col>
            <Col sm={4} md={3}>
                <Card  className=" text-center text-white" style={{ height: '25rem' }}  >
                    <Card.Img src={Cross} alt="Card image" style={{ height: '25rem' }} />
                    <Card.ImgOverlay>
                        <Card.Title className="mb-4 ">Card title</Card.Title>
                        <Card.Text className="mb-4 ">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button className="mt-4 text-yellow" variant="success" >
                                    <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    Donate Now
                                </Button>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default Pulication
  
 