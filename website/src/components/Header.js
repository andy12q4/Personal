import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed; // or use absolute if you want it to scroll with the content
  top: 0;
  left: 0;
  right: 0;
  background: transparent; // No background color
  color: #333;
  z-index: 1000;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: #rbg;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 50px;
  font-size: 1.2rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  &.active {
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo to="/">Ａｎｄｙ Ｃｈｅｎ</Logo>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/" exact activeClassName="active">
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/projects" activeClassName="active">
              Projects
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about" activeClassName="active">
              About
            </NavLinkStyled>
          </NavItem>
          
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
