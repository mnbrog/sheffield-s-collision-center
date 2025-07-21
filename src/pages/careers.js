import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import jobs from '../../data/jobs.json';

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" description="Work with us" />
    <h1>Careers</h1>
    <JobList jobs={jobs} />
    <h2>Apply Now</h2>
    <JobForm />
  </Layout>
);

export default CareersPage;
