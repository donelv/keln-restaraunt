import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainSlider.css'
import photo1 from '../../../assets/img/photo1.webp'
import photo2 from '../../../assets/img/photo2.webp'
import photo3 from '../../../assets/img/photo3.webp'
import photo4 from '../../../assets/img/photo4.webp'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
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
      <div>
        <img src={photo4} alt="Фото4" />
      </div>
    </Slider>
  )
}
