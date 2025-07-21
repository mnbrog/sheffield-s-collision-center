import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const Card = styled.div`
  min-width: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
`;

const ReviewCarousel = ({ reviews }) => (
  <Wrapper>
    {reviews.map((rev, idx) => (
      <Card key={idx}>
        <p>"{rev.text}"</p>
        <strong>- {rev.author}</strong>
      </Card>
    ))}
  </Wrapper>
);

export default ReviewCarousel;
