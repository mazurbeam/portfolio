import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 10px 0;
  color: #000;
  background-color: #eee;
  font-size: 11px;
  font-weight: 500;
  text-align: center;

  a {
    color: #000;
    font-weight: 700;
  }
`;

const Footer = () => (
  <FooterWrapper>
    
    <a
      href="https://mazurbeam.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      mazurbeam.com
    </a>
  </FooterWrapper>
);

export default Footer;
