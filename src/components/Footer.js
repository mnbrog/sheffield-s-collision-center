import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: var(--dark-grey);
  color: var(--light-grey);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer = () => (
  <Foot>
    &copy; {new Date().getFullYear()} Sheffield Collision Center. All rights reserved.
  </Foot>
);

export default Footer;