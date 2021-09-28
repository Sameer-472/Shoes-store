import React from 'react';
import './Slider.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'




const Images = [
    { url: "../images/HomeImage/1.jpg" },
    { url: "../images/HomeImage/5.jpg" },
    { url: "../images/HomeImage/6.jpg" },
]


export const Slider = () => {


    return (
        <div className="slider">
            <Carousel className="carousel">
                <Carousel.Item md={2}>
                    <Link to="products"><img
                        className="d-block  "
                        src={Images[0].url}
                        alt="First slide"
                    /></Link>
                    <Carousel.Caption>
                        <h1 className="tag">FLAT</h1>
                        <h1 className="tag">50% OFF</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="products">
                    <img
                        className="d-block  "
                        src={Images[1].url}
                        alt="Second slide"
                    /> 
                    </Link>

                    <Carousel.Caption>
                        <h1 className="tag">UPTO</h1>
                        <h1 className="tag">70% DISCOUNT</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="products">
                    <img
                        className="d-block"
                        src={Images[2].url}
                        alt="Third slide"
                    />
                </Link>

                    <Carousel.Caption>
                        <p style={{fontSize: 50 , fontStyle: "italic"}}>Start your journey with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
