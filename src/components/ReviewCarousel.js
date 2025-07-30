import React from 'react';
import styled from 'styled-components';
import sccLogo from '../../images/NEW SCC LOGO (2).png'; // Make sure the path is correct

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const BottomSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #FFD700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StarRating = ({ rating }) => (
  <StarContainer>
    {[...Array(5)].map((_, index) => (
      <span key={index}>{index < rating ? '★' : '☆'}</span>
    ))}
  </StarContainer>
);

const SccLogo = styled.img`
  width: 80px;
  height: auto;
`;

const ReviewCarousel = ({ reviews }) => (
  <Wrapper>
    {reviews.map((rev, idx) => (
      <Card key={idx}>
        <div>
          <p>"{rev.text}"</p>
          <strong>- {rev.author}</strong>
        </div>

        <BottomSection>
          <StarRating rating={rev.rating} />
          <SccLogo src={sccLogo} alt="SCC Logo" />
        </BottomSection>
      </Card>
    ))}
  </Wrapper>
);

export default ReviewCarousel;
