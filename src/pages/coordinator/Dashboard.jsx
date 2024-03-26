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
  color: ${(props) => props.theme.colors.text.primary}; // Use heading text color
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.extrabold};
`;

const Path = styled.div`
  color: ${(props) => props.theme.colors.text.secondary}; // Use tertiary text color
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.form};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const NumberText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title}; // Use appropriate font size for number text
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
const EnrolledStudentText = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.secondary}; // Use primary text color
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body}; // Use appropriate font size for body text
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`;

const ViewButton = styled(Button)`
  && {
    border-radius: 20px;
    background: ${(props) => props.theme.colors.button.primary}; // Use primary button background color
    width: 120px;
    color: ${(props) => props.theme.colors.text.tertiary};
    height: 50px;
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.form}; // Use appropriate font size for body text
    font-weight: ${(props) => props.theme.fontWeights.bold};

    flex-shrink: 0;
    transition: background 0.3s; /* Add smooth transition effect */
    &:hover {
      background: ${(props) => props.theme.colors.button.phover}; // Use primary button hover background color
    }
  }
`;

const CardContainer = styled(Card)`
  && {
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.colors.ui.secondary};
    background: ${(props) => props.theme.colors.bg.secondary};
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center vertically */
  height: 100%; /* Ensure full height */
  padding: 0;
`;

const StyledAutocomplete = styled(Autocomplete)`
  && {
    width: calc(100% - 40px); /* Adjust the width here */
    margin-left: 20px;
  }
`;

const CDashboard = () => {
  const heading = 'Dashboard';
  const path = ['Coordinator', 'Dashboard'];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <Grid container spacing={3} alignItems="center" marginBottom={2}>
          <Grid item xs={4}>
            <StyledAutocomplete
              options={['Department 1', 'Department 2', 'Department 3']} // Replace with your department options
              renderInput={(params) => <TextField {...params} label="Department" />}
            />
          </Grid>
          <Grid item xs={4}>
            <StyledAutocomplete
              options={['Course 1', 'Course 2', 'Course 3']} // Replace with your course options
              renderInput={(params) => <TextField {...params} label="Course" />}
            />
          </Grid>
          <Grid item xs={4}>
            <StyledAutocomplete
              options={['Batch 1', 'Batch 2', 'Batch 3']} // Replace with your batch options
              renderInput={(params) => <TextField {...params} label="Batch" />}
            />
          </Grid>
        </Grid>
        
        {/* First Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>1</NumberText>
              <EnrolledStudentText variant="body1">Enrolled Student</EnrolledStudentText>
              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Second Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>2</NumberText>
              <EnrolledStudentText variant="body1">Enrolled Student</EnrolledStudentText>              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Third Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>3</NumberText>
              <EnrolledStudentText variant="body1">Enrolled Student</EnrolledStudentText>              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Fourth Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>4</NumberText>
              <EnrolledStudentText variant="body1">Enrolled Student</EnrolledStudentText>              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>

        {/* Fifth Card Container */}
        <CardContainer>
          <CardContent>
            <Content>
              <NumberText>5</NumberText>
              <EnrolledStudentText variant="body1">Enrolled Student</EnrolledStudentText>              <ViewButton variant="contained">View</ViewButton>
            </Content>
          </CardContent>
        </CardContainer>
      </ContentContainer>
    </>
  );
};

export default CDashboard;
