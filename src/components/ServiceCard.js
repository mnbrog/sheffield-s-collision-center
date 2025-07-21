import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const ServiceCard = ({ image, title, description }) => (
  <Card>
    {image && <GatsbyImage image={getImage(image)} alt={title} />}
    <Title>{title}</Title>
    <p>{description}</p>
  </Card>
);

export default ServiceCard;
