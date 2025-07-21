import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: #f5f5f5;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer = () => (
  <Foot>
    &copy; 2025 Sheffield Collision Center. All rights reserved.
  </Foot>
);

export default Footer;
