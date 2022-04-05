import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MainSlider.css'
import photo1 from '../../../assets/img/photo1.webp'
import photo2 from '../../../assets/img/photo2.webp'
import photo3 from '../../../assets/img/photo3.webp'
import photo4 from '../../../assets/img/photo4.webp'
export default function SimpleSlider() {
  let firstClientX, firstClientY, clientX, clientY
  const touchStart = (e) => {
    firstClientX = e.touches[0].clientX
    firstClientY = e.touches[0].clientY
  }
  const preventTouch = (e) => {
    const minValue = 5 // threshold

    clientX = e.touches[0].clientX - firstClientX
    clientY = e.touches[0].clientY - firstClientY

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault()
      e.returnValue = false
      return false
    }
  }
  useEffect(() => {
    window.addEventListener('touchstart', touchStart)
    window.addEventListener('touchmove', preventTouch, { passive: false })
    return () => {
      window.removeEventListener('touchstart', touchStart)
      window.removeEventListener('touchmove', preventTouch, {
        passive: false,
      })
    }
  }, [])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
