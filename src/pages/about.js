import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import team from '../../data/team.json';
import milestones from '../../data/milestones.json';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const OwnerCard = styled.div`
  background: var(--light-grey);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--shadow);
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" description="Learn about Sheffield Collision Center" />
    <AboutWrapper>
      <Section>
        <SectionTitle>Who We Are</SectionTitle>
        <p>
          Sheffield's Collision Center was founded in 2019. We set out to provide the finest auto servicing shop in the Columbus, Georgia area. We stay at the forefront of the latest technology while retaining our knowledge of older classic cars. Whether your vehicle is old or new, we have the finest technicians standing by to repair any problem you may have.
        </p>
        <p>
          We understand how important your car is to you. We’ve built a strong foundation of knowledge through hands on training. It is our standard for each employee to have a vast knowledge to do the best work for your vehicle. Our reputation is crucial. Leave your car with pros who really care.
        </p>
      </Section>

      <Section>
        <SectionTitle>About the Owner</SectionTitle>
        <OwnerCard>
          <h3>Thurston Sheffield</h3>
          <p>
            Thurston Sheffield, owner of Sheffield's Collision Center, began his career in auto repair at just 19 years old and brings a wealth of knowledge from his background in insurance adjusting. With 30 years in the industry, Thurston understands the value of hard work and continuous improvement. While he's seen it all, he remains committed to learning and evolving. His experience has shaped his deep understanding of what it takes to keep customers happy and satisfied.
          </p>
        </OwnerCard>
      </Section>
      
      <Section>
        <SectionTitle>Our History</SectionTitle>
        <Timeline events={milestones} />
      </Section>

    </AboutWrapper>
  </Layout>
);

export default AboutPage;