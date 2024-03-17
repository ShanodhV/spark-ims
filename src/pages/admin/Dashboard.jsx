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

const Dashboard = () => {
  const heading = 'Dashboard';
  const path = ['Admin', 'Dashboard'];
  const theme = useTheme();

  return (
    <div>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <Grid container spacing={3} style={{ padding: '20px' }}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <AccountCircle sx={{ fontSize: 50}}/>
              </IconContainer>
              <CardTitle variant="body" component="div">
                03 Faculties
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <Group sx={{ fontSize: 50}} />
              </IconContainer>
              <CardTitle variant="body" component="div">
                06 Departments
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <Business sx={{ fontSize: 50}}/>
              </IconContainer>
              <CardTitle variant="body" component="div">
                01 Batches
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <Class sx={{ fontSize: 50}} />
              </IconContainer>
              <CardTitle variant="body" component="div">
                01 Degree Program
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <SupervisorAccount sx={{ fontSize: 50}} />
              </IconContainer>
              <CardTitle variant="body" component="div">
                01 Courses
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <Business sx={{ fontSize: 50}}/>
              </IconContainer>
              <CardTitle variant="body" component="div">
                02 Organizations
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', border: '4px solid #27AE60' }}>
            <CardContent>
              <IconContainer>
                <SupervisorAccount sx={{ fontSize: 50}}/>
              </IconContainer>
              <CardTitle variant="body" component="div">
                13 Users
              </CardTitle>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;