import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
`;

const Headline = styled.h1`
  margin: 0 0 1.5rem;
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTA = styled(Link)`
  background: var(--white);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Hero = () => (
  <Wrapper>
    <Headline>Collision Repair You Can Trust</Headline>
    <CTA to="/contact">Get a Free Estimate</CTA>
  </Wrapper>
);

export default Hero;