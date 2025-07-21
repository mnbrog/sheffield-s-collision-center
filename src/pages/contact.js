import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

// Create a wrapper component to handle the styling
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Get in touch" />
    <ContactWrapper>
      <h1>Contact</h1>
      <ContactForm />
    </ContactWrapper>
  </Layout>
);

export default ContactPage;