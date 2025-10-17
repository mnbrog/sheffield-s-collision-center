import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ReviewCarousel from '../components/ReviewCarousel';
import QuickContactBar from '../components/QuickContactBar';
import SEO from '../components/SEO';
import reviews from '../../data/reviews.json';
import locationPhoto from '../../images/IMG_1983.jpeg';
import styled from 'styled-components';

const ImageSection = styled.section`
  margin: 3rem auto;
  max-width: 960px;
  padding: 0 1rem;
  text-align: center;
`;

const LocationImage = styled.img`
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Collision repair you can trust" />
    <Hero />
    <ReviewCarousel reviews={reviews} />
       <ImageSection>
      <LocationImage
        src={locationPhoto}
        alt="Exterior of Sheffield's Collision Center"
        loading="lazy"
      />
    </ImageSection>

  </Layout>
);

export default IndexPage;
