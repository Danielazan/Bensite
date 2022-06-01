import React from 'react'
import './PhotoSpeaks.css'
import {Container,Card,Row, Col } from 'react-bootstrap';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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
function PhotoSpeaks() {
  return (
    <Container fluid>
       <Row>
            <Col></Col>
            
        </Row>
        <Row>
            <Col className="m-3">
            <Swiper
                modules={[Navigation, Pagination,  Autoplay, Scrollbar, A11y]}
                spaceBetween={50}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                
                navigation
                autoplay={{ delay: 1000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swipe"
                >
                            {photos.map(photo =>(
                                <SwiperSlide key={photo.name} className="swipes" >
                                    <Col>
                                    <Card className=" text-center text-white">
                                        <Card.Img src={photo.url} alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>{photo.name}</Card.Title>
                                            
                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                    </Col>
                                </SwiperSlide>
                            ))}
                        
                    </Swiper>
            </Col>
            
        </Row>
    </Container>
  )
}

export default PhotoSpeaks
