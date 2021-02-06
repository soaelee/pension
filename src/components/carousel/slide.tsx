import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px){
    height: 650px;
    background: white;
  }
`
const Desc = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  background: rgba(255, 255, 255, .4);
  padding: 1em 3em;
  border-radius: 4px;
  width: 250px;
  height: 200px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2, p {
    letter-spacing: .5em;
  }
  p{
    font-size: .8rem;
    border-bottom: 1px solid #686767;
    position: relative;
    bottom: -30px;
  }
  @media only screen and (max-width: 768px) {
    top: 90%;
    transform: translateY(-90%);
    right: initial;
    width: 100%;
    height: 180px;
    background: white;
    border-radius: 0px;
    p{
      bottom: -20px;
    }
  }
`

const Img = styled.img`
  width: 100%;
  max-height: 600px;
  @media only screen and (max-width: 768px) {
    max-height: 450px;
  }
`


interface SlideProps {
  src: any,
  alt: string,
  desc: string,
  title: string,
}

function Slide({src, alt, desc, title}: SlideProps) {
  return (
    <Wrapper>
      <Img src={src} alt={alt}/>
      <Desc>
        <h2>{title}</h2>
        <span>{desc}</span>
        <p>예약하러 가기</p>
      </Desc>
    </Wrapper>
  )
}
// { mainCarousel.map((slide, i) => (
  // <img src ={slide.src} alt={`펜션사진${i + 1}`}/>
// ))}
export default Slide
