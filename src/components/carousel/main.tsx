import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mainCarousel } from '../../data/mainCarousel';
import Slide from './slide';
const settings = {
  dots: false, // 캐러셀의 점을 보여줄 것인지
  infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
  speed: 500, // 넘어가는 속도는 몇으로 할 것인지
  slidesToShow: 1, 
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  fade: false,
};

function Carousel() {
  return (
    <Slider {...settings}>
      { mainCarousel.map((slide, i) => (
        <Slide src={slide.src} alt={`펜션사진${i + 1}`} desc={slide.desc} title={slide.title} />
      ))}
    </Slider>
  )
}

export default Carousel
