import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--light-grey);
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Card = styled.div`
  min-width: 300px;
  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
  padding: 1.5rem;
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