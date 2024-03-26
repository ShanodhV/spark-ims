import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './sidebar';
import Navbar from './navbar';

const MainContainer = styled.div`
  display: flex;
`;
const ContentContainer = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.isSidebarOpen ? '346px' : '0')};
  transition: margin-left 0.3s ease;
  overflow-y: auto; /* Ensure vertical scrolling */
  
`;

const MainLayout = ({ children, darkMode, toggleDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MainContainer>
      <Sidebar isOpen={isSidebarOpen} darkMode={darkMode} />
      <ContentContainer isSidebarOpen={isSidebarOpen}>
        <Navbar onToggleSidebar={toggleSidebar} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {children}
      </ContentContainer>
    </MainContainer>
  );
};

export default MainLayout;