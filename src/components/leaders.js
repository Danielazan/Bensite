import React from 'react'
import './leaders.css'
import { Carousel, Button, Container,Card, ListGroup,Row, Col } from 'react-bootstrap';

const photos =[
    {
        name:'photo 1',
        url: 'landimg/your.jpeg'
    },
    {
        name:'photo 2',
        url:'landimg/van.jpg'
    },
    {
        name:'photo 3',
        url: 'landimg/women.jpg'
    },
    {
        name:'photo 4',
        url: 'landimg/saint.jpg'
    },
   
]
function Leaders() {
    return (
      
      <Container>
      <Row className="justify-content-md-center ld">

          {photos.map(photo => (
              <Col xs="12" md="3" lg="3" className="mt-4">
                   <Card  border="primary"  >
        
                    <Card.Img variant="top" rounded  src={photo.url}  width="200" height="200" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>  
              </Col>
          ))}
        
      </Row>
      </Container>
    )
  }
  
  export default Leaders
  
 