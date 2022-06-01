import React from 'react'
import './Silder.css'
import { Carousel,  Container, Row, Col } from 'react-bootstrap';

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
    {
        name:'photo 5',
        url: 'landimg/felix - Copy.png'
    },
    {
        name:'photo 6',
        url: 'landimg/bea.jpg'
    },
]
function Silder() {
  return (
    <Container  fluid>
        <Row>
            <Col xs={12} md={4}>
                <Carousel>
                    {photos.map(photo =>(
                        <Carousel.Item interval={100}>
                        <img
                        className="d-block w-100"
                        src= {photo.url}
                        width="200"
                        height="300"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    ))}
                
                </Carousel>
            </Col>
            <Col xs={12} md={4}>
                <Carousel>
                    {photos.map(photo =>(
                        <Carousel.Item interval={100}>
                        <img
                        className="d-block w-100"
                        src= {photo.url}
                        width="200"
                        height="300"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    ))}
                
                </Carousel>
            </Col>
            <Col xs={12} md={4}>
            <Carousel fade>
                    {photos.map(photo =>(
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {photo.url}
                        width="200"
                        height="300"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    ))}
                
                </Carousel>
            </Col>
        </Row>
    </Container>
  )
}

export default Silder
