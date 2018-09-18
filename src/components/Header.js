import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  padding-top: 130px;
  padding-bottom: 30px
  text-align: center;
  color: #04060B;
  font-size: 26px;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
`;

const Header = () => (
  <header>
    <Title>Find basic information about cities in all states in USA.</Title>
  </header>
);

export default Header;
