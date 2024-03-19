import React from 'react';
import Navbar from '../../components/navbar'; 
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Sidebar from '../../components/sidebar';

const ContentContainer = styled.div`
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

const CardContainer = styled(Card)`
  && {
    border-radius: 20px;
    border: 2px solid #27AE60;
    background: #E0FFEE;
    width: 100%;
    height: 76px;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

const NumberText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ViewButton = styled(Button)`
  && {
    border-radius: 20px;
    background: #27AE60;
    stroke-width: 2px;
    stroke: #27AE60;
    width: 148px;
    height: 50px;
    flex-shrink: 0;
    transition: background 0.3s; /* Add smooth transition effect */
    &:hover {
      background: #218c54;
    }
  }
`;

const DeanDashboard = () => {
  const heading = 'Dean Dashboard';
  const path = ['Dean', 'Dashboard'];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <div style={{ display: 'flex', marginLeft: '20px', width: 'calc(100% - 40px)' }}>
              <Autocomplete
                options={['Department 1', 'Department 2', 'Department 3']} // Replace with your department options
                renderInput={(params) => <TextField {...params} label="Department" />}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: 'flex', width: 'calc(100% - 40px)' }}>
              <Autocomplete
                options={['Course 1', 'Course 2', 'Course 3']} // Replace with your course options
                renderInput={(params) => <TextField {...params} label="Course" />}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: 'flex', width: 'calc(100% - 40px)' }}>
              <Autocomplete
                options={['Batch 1', 'Batch 2', 'Batch 3']} // Replace with your batch options
                renderInput={(params) => <TextField {...params} label="Batch" />}
              />
            </div>
          </Grid>
        </Grid>

        {/* First Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>1</NumberText>
              <Typography variant="body1">Enrolled Student</Typography>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Second Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>2</NumberText>
              <Typography variant="body1">Some other metric</Typography>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Third Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>3</NumberText>
              <Typography variant="body1">Another metric</Typography>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Fourth Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>4</NumberText>
              <Typography variant="body1">Yet another metric</Typography>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Fifth Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>5</NumberText>
              <Typography variant="body1">One more metric</Typography>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>
      </ContentContainer>
    </>
  );
};

export default DeanDashboard;
