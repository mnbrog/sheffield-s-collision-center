import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import services from '../../data/services.json';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background: var(--light-grey);
  border-radius: 15px;
  text-align: center;
`;

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" description="Auto body and repair services for all makes and models." />
    <ServicesWrapper>
      <PageHeader>
        <PageTitle>Repair Services for ALL Makes & Models</PageTitle>
        <p>At Sheffield's Collision Center, we offer top-tier auto body repair services for all makes and models. Whether it's a minor dent or major collision damage, we’ve got the experience and expertise to get your vehicle back on the road in no time.</p>
      </PageHeader>
      
      <Grid>
        {services.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </Grid>
      
      {/* <InfoSection>
        <h2></h2>
        <p></p>
      </InfoSection> */}
    </ServicesWrapper>
  </Layout>
);

export default ServicesPage;