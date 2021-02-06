import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/carousel/main';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function Main() {
  return (
    <Wrapper>
        <Carousel />
    </Wrapper>
  )
}

export default Main
