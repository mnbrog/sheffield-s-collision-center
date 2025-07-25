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

const TextArea = styled.textarea`
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

const ContactForm = () => (
  <Form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Input type="text" name="name" placeholder="Name" required />
    <Input type="email" name="email" placeholder="Email" required />
    <TextArea name="message" rows="5" placeholder="Message" required />
    <Button type="submit">Send</Button>
  </Form>
);

export default ContactForm;
