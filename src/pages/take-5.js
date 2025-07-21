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

const Take5Page = () => {
  const take5Location = locations.find(loc => loc.name === "Take 5 Oil Change");

  return (
    <Layout>
      <SEO title="Take 5 Oil Change Location" description="Visit us at our Take 5 Oil Change location at 456 Elm St, Sheffield, AL." />
      <PageWrapper>
        <h1>Take 5 Oil Change Location</h1>
        {take5Location && <LocationCard location={take5Location} />}
      </PageWrapper>
    </Layout>
  );
};

export default Take5Page;