import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard as DashboardIcon, FormatListBulleted as BatchesIcon, School as FacultyIcon, BusinessCenter as DepartmentIcon, AccountBalance as DegreeProgramIcon, Book as CourseIcon, Settings as MainSetupIcon, Business as OrganizationIcon, Person as UserIcon, RequestPage, RequestQuoteSharp, AccessAlarm, LocalActivity, EventNote } from '@mui/icons-material';
import { Image } from 'react-bootstrap';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

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

const Logo = styled(Image)`
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
const SubMenu = styled.div`
  display: ${(props) => props.open ? 'block' : 'none'};
  padding-left: 40px;
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
  const [openEvaluation, setOpenEvaluation] = useState(false);
  const [openAssignment, setOpenAssignment] = useState(false);

  const toggleEvaluationSubMenu = () => {
    setOpenEvaluation(!openEvaluation);
    setOpenAssignment(false); // Close Assignment sub-menu
  };

  const toggleAssignmentSubMenu = () => {
    setOpenAssignment(!openAssignment);
    setOpenEvaluation(false); // Close Evaluation sub-menu
  };

  const currentYear = new Date().getFullYear();
  return (
    <SidebarContainer style={{ display: isOpen ? 'block' : 'none' }} darkMode={darkMode}>
      <LogoContainer>
        <Logo src={require('../assets/logo.png')} alt="Logo" />
      </LogoContainer>
      <Nav>

        {/* AdminSideBar */}
        {/* <NavLinkStyled to="/admin/dashboard" activeClassName="active" darkMode={darkMode}>
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
        </NavLinkStyled> */}

        {/* Dean SideBar */}
        {/* <NavLinkStyled to="/dean/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/dean/internship" activeClassName="active" darkMode={darkMode}>
          <WorkIcon /> Internship
        </NavLinkStyled>
        <NavLinkStyled to="dean/evaluation" activeClassName="active" darkMode={darkMode}>
          <FacultyIcon /> Evaluation
        </NavLinkStyled> */}

        {/* HOD SideBar */}
        {/* <NavLinkStyled to="/hod/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/hod/degree-program" activeClassName="active" darkMode={darkMode}>
          <DegreeProgramIcon /> Degree Program
        </NavLinkStyled>
        <NavLinkStyled to="/hod/course" activeClassName="active" darkMode={darkMode}>
          <CourseIcon /> Course
        </NavLinkStyled>
        <NavLinkStyled to="/hod/organization" activeClassName="active" darkMode={darkMode}>
          <OrganizationIcon /> Organization
        </NavLinkStyled>
        <NavLinkStyled to="/hod/user" activeClassName="active" darkMode={darkMode}>
          <UserIcon /> User
        </NavLinkStyled> 
        <NavLinkStyled to="/hod/evaluation" activeClassName="active" darkMode={darkMode}>
          <BatchesIcon /> Evaluation
        </NavLinkStyled> */}

        {/* Coordinator SideBar*/}
        {/* <NavLinkStyled to="/coordinator/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/coordinator/request" activeClassName="active" darkMode={darkMode}>
          <RequestPage/> Request 
        </NavLinkStyled>
        <NavLinkStyled to="/coordinator/enroll" activeClassName="active" darkMode={darkMode}>
          <LocalActivity/> Enrollments 
        </NavLinkStyled>
        <NavLinkStyled to="/coordinator/internship" activeClassName="active" darkMode={darkMode}>
          <WorkIcon /> Internship
        </NavLinkStyled>
        <NavLinkStyled to="/coordinator/evaluation" activeClassName="active" darkMode={darkMode} onClick={toggleEvaluationSubMenu}>
          <FacultyIcon /> Evaluation
        </NavLinkStyled>
        <SubMenu open={openEvaluation}>
          <NavLinkStyled to="/coordinator/evaluation/evaluationTemp" activeClassName="active" darkMode={darkMode}>
            <FacultyIcon /> Evaluation Template
          </NavLinkStyled>
          <NavLinkStyled to="/coordinator/evaluation/evaluation" activeClassName="active" darkMode={darkMode}>
            <FacultyIcon /> Evaluations
          </NavLinkStyled>
        </SubMenu>
        <NavLinkStyled to="/coordinator/assessment" activeClassName="active" darkMode={darkMode} onClick={toggleAssignmentSubMenu}>
          <AssessmentIcon /> Assignment
        </NavLinkStyled>
        <SubMenu open={openAssignment}>
          <NavLinkStyled to="/coordinator/assessment/assTemp" activeClassName="active" darkMode={darkMode}>
            <AssessmentIcon /> Assignment Template
          </NavLinkStyled>
          <NavLinkStyled to="/coordinator/assessment/assessment" activeClassName="active" darkMode={darkMode}>
            <AssessmentIcon /> Assignments
          </NavLinkStyled>
        </SubMenu>
        <NavLinkStyled to="/coordinator/user" activeClassName="active" darkMode={darkMode}>
          <UserIcon /> User
        </NavLinkStyled>  */}

        {/* Industry Supervisor SideBar */}
        {/* <NavLinkStyled to="/industrySupervisor/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/industrySupervisor/internship" activeClassName="active" darkMode={darkMode}>
          <WorkIcon/> Internship
        </NavLinkStyled> */}

        {/* Student SideBar*/}
        <NavLinkStyled to="/Student/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>

        <NavLinkStyled to="/student/myinternship" activeClassName="active" darkMode={darkMode}>
          <WorkIcon /> My Internship
        </NavLinkStyled>

        <NavLinkStyled to="/student/myassessment" activeClassName="active" darkMode={darkMode}>
          <AssessmentIcon /> My Assessment
        </NavLinkStyled>

        <NavLinkStyled to="/student/diary" activeClassName="active" darkMode={darkMode}>
          <EventNote/> Daily Diary
        </NavLinkStyled>




        {/* Academic Superviosr SideBar*/}
        {/* <NavLinkStyled to="/academicSupervisor/dashboard" activeClassName="active" darkMode={darkMode}>
          <DashboardIcon /> Dashboard
        </NavLinkStyled>
        <NavLinkStyled to="/academicSupervisor/degree-program" activeClassName="active" darkMode={darkMode}>
          <DegreeProgramIcon /> Degree Program
        </NavLinkStyled>
        <NavLinkStyled to="/academicSupervisor/course" activeClassName="active" darkMode={darkMode}>
          <CourseIcon /> Course
        </NavLinkStyled>
        <NavLinkStyled to="/academicSupervisor/organization" activeClassName="active" darkMode={darkMode}>
          <OrganizationIcon /> Organization
        </NavLinkStyled>
        <NavLinkStyled to="/academicSupervisor/user" activeClassName="active" darkMode={darkMode}>
          <UserIcon /> User
        </NavLinkStyled> 
        <NavLinkStyled to="/academicSupervisor/evaluation" activeClassName="active" darkMode={darkMode}>
          <BatchesIcon /> Evaluation
        </NavLinkStyled> */}

      </Nav>
      <Copyright>© {currentYear} Xenosys. All rights reserved.</Copyright>
    </SidebarContainer>
  );
};

export default Sidebar;