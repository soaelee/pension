import main1 from '../assets/img/main1.jpg';
import main2 from '../assets/img/main2.jpg';
import main3 from '../assets/img/main3.jpg';

interface carouselInterface {
  src: any;
  title: string;
  desc: string;
}
export const mainCarousel: carouselInterface[] = [
  {
    src: main1,
    title: '스와이퍼1',
    desc: 'Hello, I am Swiper1, Nick to meet you'
  },
  {
    src: main2,
    title: '스와이퍼2',
    desc: 'Hello, I am Swiper2, Nick to meet you, Come to JangHeung'
  },
  {
    src: main3,
    title: '스와이퍼3',
    desc: 'Hello, I am Swiper3, Good to see you!'
  }
]