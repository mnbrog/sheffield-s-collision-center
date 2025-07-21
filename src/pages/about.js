import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import team from '../../data/team.json';
import milestones from '../../data/milestones.json';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const TeamCard = styled.div`
  text-align: center;
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" description="Learn about Sheffield Collision Center" />
    <h1>About Us</h1>
    <TeamGrid>
      {team.map(member => (
        <TeamCard key={member.name}>
          {member.image && (
            <GatsbyImage image={getImage(member.image)} alt={member.name} />
          )}
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </TeamCard>
      ))}
    </TeamGrid>
    <h2>Our History</h2>
    <Timeline events={milestones} />
    <h2>Certifications</h2>
    <p>ASE, BBB, I-CAR Certified</p>
  </Layout>
);

export default AboutPage;
