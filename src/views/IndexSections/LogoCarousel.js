import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = ({ images, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container className="">
      <h2 className="text-center section-title text-uppercase mb-4">Our <span className="bg-mawasim text-white px-3 py-1">{title}</span></h2>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="slider-item custom-slider-item">
              <img src={src} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default LogoCarousel;
