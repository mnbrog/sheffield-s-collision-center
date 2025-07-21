import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', 'Open Sans', sans-serif;
    background: #fff;
    color: #333;
  }
`;

const Layout = ({ children }) => (
  <>
    <Helmet>
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
