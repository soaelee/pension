import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';
import Nav from './nav';
import { LoginOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3em;
  position: sticky;
  top: 0;
  z-index: 2;
  background: white;
  margin: 0 auto;
  max-width: 1280px;
  @media only screen and (max-width: 768px) {
    padding: 0 1.5em;
  }
`
const Logo = styled.img`
  width: 100px;
`

const Button = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: .9rem;
`
function Header() {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Nav />
      <Button>
        <LoginOutlined style={{margin: '0 .5em 0 1em'}}/>
        <span>LOGIN</span>
      </Button>
    </Wrapper>
  )
}

export default Header
