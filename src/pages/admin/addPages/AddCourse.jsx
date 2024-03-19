import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../../components/PrimaryButton';
import FormField from '../../../components/FormField.jsx';

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

  const facultyOptions = [
    { label: 'Faculty 1', value: 'faculty1' },
    { label: 'Faculty 2', value: 'faculty2' },
  ];

  const departmentOptions = [
    { label: 'Department 1', value: 'department1' },
    { label: 'Department 2', value: 'department2' },
  ];

  const degreeProgramOptions = [
    { label: 'Degree Program 1', value: 'degreeProgram1' },
    { label: 'Degree Program 2', value: 'degreeProgram2' },
  ];

  const courseTypeOptions = [
    { label: 'Course Type 1', value: 'courseType1' },
    { label: 'Course Type 2', value: 'courseType2' },
  ];

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
              <FormField
                label="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <FormField
                label="Faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                variant="outlined"
                select
                options={facultyOptions}
              />
              <FormField
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                variant="outlined"
                select
                options={departmentOptions}
              />
              <FormField
                label="Degree Program"
                value={degreeProgram}
                onChange={(e) => setDegreeProgram(e.target.value)}
                variant="outlined"
                select
                options={degreeProgramOptions}
              />
              <FormField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <FormField
                label="Number of Hours"
                value={numberOfHours}
                onChange={(e) => setNumberOfHours(e.target.value)}
                variant="outlined"
                fullWidth
              />
              <FormField
                label="Course Type"
                value={courseType}
                onChange={(e) => setCourseType(e.target.value)}
                variant="outlined"
                select
                options={courseTypeOptions}
              />
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
