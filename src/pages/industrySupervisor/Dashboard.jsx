import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { AccountCircle, Group, Business, Class, SupervisorAccount } from '@mui/icons-material';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
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

const IconContainer = styled.div`
  font-size: 50px;
  color: #27AE60;
`;

const CardTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 500;
    color: #27AE60;
  }
`;

const IsDashboard = () => {
  const heading = 'Dashboard';
  const path = ['Supervisor ', 'Dashboard'];
  const theme = useTheme();

  return (
    <div>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
    </div>
  );
};

export default IsDashboard;