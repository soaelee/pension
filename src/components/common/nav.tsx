import React from 'react';
import styled from 'styled-components';
import { category } from '../../data/nav';
import { KeyOutlined } from '@ant-design/icons';

const Wrapper = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #e4f4fa;
    padding: 0 2em;
    justify-content: space-around;
  }
`

const Category = styled.li`
  list-style: none;
  margin-right: 1.5em;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: .9rem;
  }
`

function Nav() {
  //link는 <Link>를 통해서 이동
  return (
    <Wrapper>
      { category.map(menu => 
        <Category>{ menu.title.toUpperCase() }</Category>
      )}
    </Wrapper>
  )
}

export default Nav
