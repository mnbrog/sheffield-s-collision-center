import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationCard from '../components/LocationCard';
import locations from '../../data/locations.json';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const SheffieldMainPage = () => {
  const sheffieldMainLocation = locations.find(loc => loc.name === "Sheffield's Collision Center");

  return (
    <Layout>
      <SEO title="Sheffield Main Location" description="Visit our main location at 123 Main St, Sheffield, AL." />
      <PageWrapper>
        <h1>Our Main Location</h1>
        {sheffieldMainLocation && <LocationCard location={sheffieldMainLocation} />}
      </PageWrapper>
    </Layout>
  );
};

export default SheffieldMainPage;