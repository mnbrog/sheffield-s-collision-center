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
        <SectionTitle>About Sheffield's Collision Center</SectionTitle>
        <p>
          At Sheffield's Collision Center, we bring over 30 years of experience in auto body repair, led by owner Thurston Sheffield. Our skilled team is dedicated to delivering top-notch service with precision and care. Whether it's a small fender-bender or major collision damage, we’re equipped to handle it all. Trust us to get your vehicle back to its best, quickly and efficiently.
        </p>
      </Section>

      <Section>
        <SectionTitle>About the Owner</SectionTitle>
        <OwnerCard>
          <h3>Thurston Sheffield</h3>
          <p>
            Thurston Sheffield is the owner of Sheffield's Collision Center. He started his career in car repair at the age of 19 and has a background in insurance adjusting. He knows the value of hard work. Although Thurston has been doing this for 30 years, he feels like there is always more to change and more to learn. Leave your car with pros who really care.
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