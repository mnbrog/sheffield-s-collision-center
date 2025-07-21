import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Get in touch" />
    <h1>Contact</h1>
    <ContactForm />
  </Layout>
);

export default ContactPage;
