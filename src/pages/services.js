import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import services from '../../data/services.json';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" description="Auto body services" />
    <h1>Services</h1>
    <Grid>
      {services.map(service => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
    </Grid>
    <section>
      <h2>Lifetime Guarantee</h2>
      <p>We stand behind our work for the life of your vehicle.</p>
    </section>
  </Layout>
);

export default ServicesPage;
