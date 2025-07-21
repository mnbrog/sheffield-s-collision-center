import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #008080, #00a2e8);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const Headline = styled.h1`
  margin: 0 0 1.5rem;
  font-size: 2.5rem;
`;

const CTA = styled(Link)`
  background: #fff;
  color: #008080;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background: #f5f5f5;
  }
`;

const Hero = () => (
  <Wrapper>
    <Headline>Collision Repair You Can Trust</Headline>
    <CTA to="/contact">Get a Free Estimate</CTA>
  </Wrapper>
);

export default Hero;
