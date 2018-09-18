import React from 'react';
import styled from 'styled-components';


const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  & * {
    color: #ECEFF1;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none
  }

  & a:hover {
    color: #B0BEC5
  }
`;

const Footer = () => (
  <PageFooter>
    <a href="https://kodowicz.github.io/plantgang/">← prev project</a>
    <span>Anna Kotowicz ©  2018</span>
    <a href="">next project →</a>
  </PageFooter>
);

export default Footer;
