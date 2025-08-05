import React from 'react'; 
import styled from 'styled-components';
import logo from '../../images/NEW SCC LOGO (2).png'; // Adjust path if needed

const Wrapper = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--light-grey);
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  min-width: 300px;
  height: 350px; /* Set a fixed height */
  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push footer to bottom */
  align-items: center;
  text-align: center;
`;

const StarsAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const Stars = styled.div`
  font-size: 1.25rem;
  color: #f5a623;
  margin-bottom: 0.5rem;
`;

const Logo = styled.img`
  width: 100px;
`;

const ReviewCarousel = ({ reviews }) => (
  <Wrapper>
    {reviews.map((rev, idx) => (
      <Card key={idx}>
        <div>
          <p>"{rev.text}"</p>
          <strong>- {rev.author}</strong>
        </div>
        <StarsAndLogo>
          <Stars>★★★★★</Stars>
          <Logo src={logo} alt="Brand logo" />
        </StarsAndLogo>
      </Card>
    ))}
  </Wrapper>
);

export default ReviewCarousel;
