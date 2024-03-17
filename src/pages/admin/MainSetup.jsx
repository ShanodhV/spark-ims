// MainSetup.jsx
import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs } from '@mui/material';
import MainSetupTab1 from './addPages/MainSetupTab1';
import MainSetupTab2 from './addPages/MainSetupTab2'; 
import MainSetupTab3 from './addPages/MainSetupTab3'; 

// Define styled components
const PageContainer = styled.div`
  padding: 20px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.extrabold};
`;

const Path = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.form};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 20px;
  .MuiTabs-root {
    background-color: transparent;
  }
  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.colors.ui.secondary};
  }
`;

const StyledTab = styled(Tab)`
  color: ${(props) => props.theme.colors.text.primary} !important;
`;

const MainSetup = () => {
  const heading = 'Main Setup';
  const path = ['Admin', 'Main Setup'];

  // State for controlling active tab
  const [activeTab, setActiveTab] = React.useState(0);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <StyledTabs value={activeTab} onChange={handleTabChange} aria-label="Admin Main Setup Tabs">
        <StyledTab label="Main Configurations" />
        <StyledTab label="Theme Configurations" />
        <StyledTab label="Service Configuration" />
      </StyledTabs>
      
      {activeTab === 0 && <MainSetupTab1 />}
      {activeTab === 1 && <MainSetupTab2 />}
      {activeTab === 2 && <MainSetupTab3 />} 
    </PageContainer>
  );
};

export default MainSetup;
