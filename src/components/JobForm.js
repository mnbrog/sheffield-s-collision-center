import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  background: #045990;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
`;

const JobForm = () => (
  <Form name="job" method="POST" data-netlify="true" encType="multipart/form-data">
    <input type="hidden" name="form-name" value="job" />
    <Input type="text" name="name" placeholder="Name" required />
    <Input type="email" name="email" placeholder="Email" required />
    <Input type="file" name="resume" accept=".pdf,.doc,.docx" required />
    <Button type="submit">Apply</Button>
  </Form>
);

export default JobForm;
