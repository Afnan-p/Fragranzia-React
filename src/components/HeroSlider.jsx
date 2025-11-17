import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";
import img1 from "../assets/HeroImg1.jpg";
import img2 from "../assets/HeroImg3.jpg";
import img3 from "../assets/HeroImg4.jpg";

export const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  const slides = [
    {
      img: img1,
      title: "Find Your Signature Scent",
      subtitle: "Luxury fragrances crafted to perfection.",
      button: "Shop Now",
      buttonColor:"#ce760ad1"
    },
    {
      img: img2,
      title: "Elegance in Every Note",
      subtitle: "Experience long-lasting, premium aromas.",
      button: "Explore Collection",
        buttonColor: "#ce760ad1"
    },
    {
      img: img3,
      title: "New Arrivals Are Here",
      subtitle: "Discover fresh picks for this season.",
      button: "View More",
       buttonColor:  "#0d2a46"
    },
  ];

  return (
    <div className="hero-slider "style={{marginTop:'20px'}} >
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="slide-container">
            <img src={item.img} className="slider-img" alt="banner" />

            <div className="slide-content">
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <button className="slide-btn" style={{ backgroundColor: item.buttonColor }}>{item.button}</button>
            </div>
          </div>  
        ))}
      </Slider>
    </div>
  );
};
