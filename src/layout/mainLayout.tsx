import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100vw;
`;

const Contents = styled.div`
`
interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: any;
}

function MainLayout({ children, ...props}: MainLayoutProps) {
  return (
    <Wrapper {...props}>
      <Header />
      <Contents>
      { children }
      </Contents>
    </Wrapper>
  )
}

export default MainLayout
