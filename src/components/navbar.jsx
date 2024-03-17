import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import the dark mode icon

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.ui.secondary};
  padding: 0 20px;
`;

const ToggleButton = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.ui.secondary};
  border: none;
  cursor: pointer;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const Navbar = ({ onToggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <NavbarContainer>
      <ToggleButton onClick={onToggleSidebar}>
        <MenuIcon />
      </ToggleButton>
      <IconsContainer>
        <IconWrapper>
          <Brightness4Icon onClick={toggleDarkMode} />
        </IconWrapper>
        <IconWrapper>
          <NotificationsIcon />
        </IconWrapper>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;