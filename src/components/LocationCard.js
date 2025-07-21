import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const LocationCard = ({ location }) => (
  <Card>
    <Title>{location.name}</Title>
    <p>{location.address}</p>
    <p>{location.phone}</p>
    <p>{location.hours}</p>
  </Card>
);

export default LocationCard;
