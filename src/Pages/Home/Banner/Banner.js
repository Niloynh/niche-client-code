import React from 'react';
import { Carousel} from 'react-bootstrap';


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bs8PS2H/home-slider-image-3-min.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>   
                        <img className="d-block w-75 img-fluid mx-auto " src="https://i.ibb.co/JBY6RQq/car-slider-image-2-min.webp" alt="" />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XVsPWSh/home-slider-image-1-min.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>   
                        <img className="d-block w-75 img-fluid mx-auto " src="https://i.ibb.co/yRmBF4L/car-slider-image-1-min.webp" alt="" />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;