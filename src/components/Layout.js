import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #045990; /* A deeper, more modern teal */
    --secondary-color: #98b5f1;
    --dark-grey: #333;
    --light-grey: #f5f5f5;
    --white: #fff;
    --shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  body {
    margin: 0;
    font-family: 'Inter', 'Open Sans', sans-serif;
    background: var(--white);
    color: var(--dark-grey);
  }

  h1, h2, h3 {
    font-weight: 600;
  }
`;

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;