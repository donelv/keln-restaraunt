import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainSlider.css'
import photo1 from '../../../assets/img/photo1.jpeg'
import photo2 from '../../../assets/img/photo2.jpeg'
import photo3 from '../../../assets/img/photo3.jpeg'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // accessibility: false,
    arrows: false,
    // centerMode: true,
    // autoplay: true,
  }
  return (
    <Slider {...settings}>
      <div>
        <img src={photo1} alt="Фото1" />
      </div>
      <div>
        <img src={photo2} alt="Фото2" />
      </div>
      <div>
        <img src={photo3} alt="Фото3" />
      </div>
    </Slider>
  )
}
