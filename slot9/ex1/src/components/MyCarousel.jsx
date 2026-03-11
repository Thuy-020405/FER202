import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <Carousel className="mb-4">
            <Carousel.Item>
                <img className="d-block w-100" src="images/pizza1.jpg" alt="First slide" style={{height: '400px', objectFit: 'cover'}} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="images/pizza2.jpg" alt="Second slide" style={{height: '400px', objectFit: 'cover'}} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="images/pizza3.jpg" alt="Third slide" style={{height: '400px', objectFit: 'cover'}} />
            </Carousel.Item>
        </Carousel>
    );
};
export default MyCarousel;