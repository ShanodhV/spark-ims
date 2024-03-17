import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../../components/PrimaryButton';
import { AddCircle } from '@mui/icons-material';

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

const StyledCard = styled(Card)`
  border-radius: 10px;
  background: #EFFDF5;
`;

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfHours, setNumberOfHours] = useState('');
  const [courseType, setCourseType] = useState('');

  const heading = 'Add Course';
  const path = ['Admin', 'Add Course'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Course Name:', courseName);
    console.log('Faculty:', faculty);
    console.log('Department:', department);
    console.log('Degree Program:', degreeProgram);
    console.log('Description:', description);
    console.log('Number of Hours:', numberOfHours);
    console.log('Course Type:', courseType);
    // Reset the input fields after submission
    setCourseName('');
    setFaculty('');
    setDepartment('');
    setDegreeProgram('');
    setDescription('');
    setNumberOfHours('');
    setCourseType('');
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Course Name"
                  variant="outlined"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="faculty-label">Faculty</InputLabel>
                  <Select
                    labelId="faculty-label"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    label="Faculty"
                  >
                    <MenuItem value="faculty1">Faculty 1</MenuItem>
                    <MenuItem value="faculty2">Faculty 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="department-label">Department</InputLabel>
                  <Select
                    labelId="department-label"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    label="Department"
                  >
                    <MenuItem value="department1">Department 1</MenuItem>
                    <MenuItem value="department2">Department 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="degree-program-label">Degree Program</InputLabel>
                  <Select
                    labelId="degree-program-label"
                    value={degreeProgram}
                    onChange={(e) => setDegreeProgram(e.target.value)}
                    label="Degree Program"
                  >
                    <MenuItem value="degreeProgram1">Degree Program 1</MenuItem>
                    <MenuItem value="degreeProgram2">Degree Program 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Number of Hours"
                  variant="outlined"
                  value={numberOfHours}
                  onChange={(e) => setNumberOfHours(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="course-type-label">Course Type</InputLabel>
                  <Select
                    labelId="course-type-label"
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                    label="Course Type"
                  >
                    <MenuItem value="courseType1">Course Type 1</MenuItem>
                    <MenuItem value="courseType2">Course Type 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <PrimaryButton type="submit">
              Submit
            </PrimaryButton>
          </form>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default AddCourse;
