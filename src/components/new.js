import React from 'react'
import './new.css'
import { Button, Navbar, Container,Card, ListGroup,Row, Col } from 'react-bootstrap';
function New() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8}>
            <Row>
              <Card>
                <Card.Header as="h1">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                      As a pious movement of the Holy Spirit within the Catholic Church, CCRN achieves her aim and object
                      The Catholic Charismatic Renewal started in February 1967 in Duquesne University, Pennsylvania, USA. Like a grain of mustard seed, it has spread all over the world with a membership of about 115 million Catholics. It was birthed by the Holy Spirit and its growth has been powered by the Holy Spirit.The Catholic Charismatic Renewal of Nigeria (CCRN) is a lay organization which started in Nigeria in 1967. Within her 50 years of existence, she has spread to virtually all the parishes in the nine Archdioceses, forty-four Dioceses, and two Vicariates of the Nigerian Church. Using our most recent information, she has about 2,100 Prayer Groups (PG) and Coordinators, four hundred and forty-four executives of the Diocesan Service Team (DST), seventy two leaders of the Provincial Service ...  <a href="" >Read More</a>
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
                <Row className="num">
                  <Col classname="nums">
                 
                        {[
                          
                          'Primary',
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                          >
                            <Card.Header as="h2" className="pl-900">9</Card.Header>
                            <Card.Body>
                              <Card.Title> PROVINCES </Card.Title>
                            </Card.Body>
                          </Card>
                        ))}
                    
                  </Col>
                  <Col classname="nums">
                  {[
                          
                          'Success',
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                          >
                            <Card.Header as="h2" className="pl-900">56</Card.Header>
                            <Card.Body>
                              <Card.Title> DIOCESES </Card.Title>
                            </Card.Body>
                          </Card>
                        ))}
                  </Col>
                  <Col classname="nums">
                  {[
                          
                          'Danger',
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                          >
                            <Card.Header as="h2" className="pl-900"> 350</Card.Header>
                            <Card.Body>
                              <Card.Title> DEANERIES </Card.Title>
                            </Card.Body>
                          </Card>
                        ))}
                  </Col>
                  <Col classname="nums">
                  {[
                          
                          'Warning',
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                          >
                            <Card.Header as="h2" className="pl-900">2802</Card.Header>
                            <Card.Body>
                              <Card.Title> PRAYER GROUPS </Card.Title>
                            </Card.Body>
                          </Card>
                        ))}
                  </Col>
                  <Col classname="nums">
                  {[
                          
                          'Info',
                        ].map((variant) => (
                          <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            className="mb-2"
                          >
                            <Card.Header as="h2" className="pl-90">6689</Card.Header>
                            <Card.Body>
                              <Card.Title> MEMBERS </Card.Title>
                            </Card.Body>
                          </Card>
                        ))}
                  </Col>
                </Row>
            </Row>
        </Col>
        <Col xs={12} md={4}>
          <Col>
            <Card>
              <Card.Header as='h3'>NEWS UPDATE</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Virtual National Youth Weekend with the Lord</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Col>
    </Row>
  </Container>
  )
}

export default New
