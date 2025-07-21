import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationCard from '../components/LocationCard';
import locations from '../../data/locations.json';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const LocationsPage = () => (
  <Layout>
    <SEO title="Locations" description="Find us" />
    <h1>Locations</h1>
    <Grid>
      {locations.map(loc => (
        <LocationCard key={loc.name} location={loc} />
      ))}
    </Grid>
  </Layout>
);

export default LocationsPage;
