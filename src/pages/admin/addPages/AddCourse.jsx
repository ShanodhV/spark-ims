import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../../components/PrimaryButton';
import FormField from '../../../components/FormField'; // Import the updated FormField component
import { useForm } from 'react-hook-form';

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
  const { control, handleSubmit, reset, formState: { errors } } = useForm(); // Destructure errors from formState

  const heading = 'Add Course';
  const path = ['Admin', 'Add Course'];

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

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <FormField
                label="Course Name"
                control={control}
                name="courseName"
                inputRules={{ required: "Course name is required" }} // Use inputRules instead of rules
                errors={errors}
              /> 
              <FormField
                label="Faculty"
                control={control}
                name="faculty"
                inputRules={{ required: "Faculty is required" }}
                select
                options={facultyOptions}
                errors={errors}
              />
              <FormField
                label="Department"
                control={control}
                name="department"
                inputRules={{ required: "Department is required" }}
                select
                options={departmentOptions}
                errors={errors}
              />
              <FormField
                label="Degree Program"
                control={control}
                name="degreeProgram"
                inputRules={{ required: "Degree program is required" }}
                select
                options={degreeProgramOptions}
                errors={errors}
              />
              <FormField
                label="Description"
                control={control}
                name="description"
                inputRules={{ required: "Description is required" }}
                multiline
                rows={4}
                errors={errors}
              />
              <FormField
                label="Number of Hours"
                control={control}
                name="numberOfHours"
                inputRules={{ required: "Number of hours is required" }}
                errors={errors}
              />
              <FormField
                label="Course Type"
                control={control}
                name="courseType"
                inputRules={{ required: "Course type is required" }}
                select
                options={courseTypeOptions}
                errors={errors}
              />
            </Grid>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </CardContent> 
      </StyledCard>
    </PageContainer>
  );
};

export default AddCourse;
