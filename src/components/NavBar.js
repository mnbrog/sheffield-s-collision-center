import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-weight: 600;
  color: teal;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: teal;
  }
`;

const NavBar = () => (
  <Nav>
    <Logo to="/">Sheffield Collision</Logo>
    <NavLinks>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/careers">Careers</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavLinks>
  </Nav>
);

export default NavBar;
