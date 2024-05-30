import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = () => {
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
          slidesToScroll: 1
        }
      }
    ]
  };

  const placeholderImages = [
    require('assets/img/logos/carousel/1.png'),
    require('assets/img/logos/carousel/2.png'),
    require('assets/img/logos/carousel/3.png'),
    require('assets/img/logos/carousel/4.png'),
    require('assets/img/logos/carousel/5.png'),
    require('assets/img/logos/carousel/6.png')
  ];

  return (
    <Container className="">
      <h2 className="text-center section-title text-uppercase mb-4">Our Partners</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {placeholderImages.map((src, index) => (
            <div key={index} className="slider-item">
              <img src={src} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default LogoCarousel;
