import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard as DashboardIcon, FormatListBulleted as BatchesIcon, School as FacultyIcon, BusinessCenter as DepartmentIcon, AccountBalance as DegreeProgramIcon, Book as CourseIcon, Settings as MainSetupIcon, Business as OrganizationIcon, Person as UserIcon } from '@mui/icons-material';

const SidebarContainer = styled.div`
  width: 346px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-right: 1px shadow #ddd;
  position: fixed;
  height: 100%;
  transition: background-color 0.3s; /* Add transition for smooth color change */
  ${(props) => props.darkMode && `
    background-color: ${props.theme.colors.bg.primary};
  `}
`;

const LogoContainer = styled.div`
  height: 80px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: none;
`;

const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const Nav = styled.nav`
  padding: 0px 0px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 16px 40px;
  color: ${(props) => props.darkMode ? props.theme.colors.ui.secondary : props.theme.colors.text.tertiary};
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.Sidebar}; 

  &:hover {
    background-color: #f0f0f0;
    color: ${(props) => props.theme.colors.ui.secondary}; 
  }

  &.active {
    background-color: ${(props) => props.theme.colors.ui.quaternary}; 
    color: ${(props) => props.theme.colors.text.nav};
  }

  & > svg {
    margin-right: 20px;
  }
`;
const Copyright = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size:${(props) => props.theme.fontSizes.copyright};
  color: ${(props) => props.theme.colors.text.tertiary};
`;

const Sidebar = ({ isOpen, darkMode }) => {
  const currentYear = new Date().getFullYear();
  return (
    <SidebarContainer style={{ display: isOpen ? 'block' : 'none' }} darkMode={darkMode}>
      <LogoContainer>
        <Logo src="./assets/logo.png" alt="Logo" />
      </LogoContainer>
      <Nav>
        <NavLinkStyled to="/admin/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/admin/batches" activeClassName="active" darkMode={darkMode}>
          <BatchesIcon /> Batches
        </NavLinkStyled>
        <NavLinkStyled to="/admin/faculty" activeClassName="active" darkMode={darkMode}>
          <FacultyIcon /> Faculty
        </NavLinkStyled>
        <NavLinkStyled to="/admin/department" activeClassName="active" darkMode={darkMode}>
          <DepartmentIcon /> Department
        </NavLinkStyled>
        <NavLinkStyled to="/admin/degree-program" activeClassName="active" darkMode={darkMode}>
          <DegreeProgramIcon /> Degree Program
        </NavLinkStyled>
        <NavLinkStyled to="/admin/course" activeClassName="active" darkMode={darkMode}>
          <CourseIcon /> Course
        </NavLinkStyled>
        <NavLinkStyled to="/admin/main-setup" activeClassName="active" darkMode={darkMode}>
          <MainSetupIcon /> Main Setup
        </NavLinkStyled>
        <NavLinkStyled to="/admin/organization" activeClassName="active" darkMode={darkMode}>
          <OrganizationIcon /> Organization
        </NavLinkStyled>
        <NavLinkStyled to="/admin/user" activeClassName="active" darkMode={darkMode}>
          <UserIcon /> User
        </NavLinkStyled>
      </Nav>
      <Copyright>© {currentYear} Xenosys. All rights reserved.</Copyright>
    </SidebarContainer>
  );
};

export default Sidebar;