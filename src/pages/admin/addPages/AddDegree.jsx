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

const AddDegree = () => {
  const { control, handleSubmit, reset } = useForm(); // Destructure control, handleSubmit, and reset from useForm

  const heading = 'Add Degree';
  const path = ['Admin', 'Add Degree'];

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
                label="Degree Name"
                control={control}
                name="degreeName"
                inputRules={{ required: 'Degree name is required' }}
              />
              <FormField
                label="Faculty"
                control={control}
                name="faculty"
                select
                options={[
                  { label: 'Faculty 1', value: 'faculty1' },
                  { label: 'Faculty 2', value: 'faculty2' },
                ]}
                inputRules={{ required: 'Faculty is required' }}
              />
              <FormField
                label="Department"
                control={control}
                name="department"
                rows={2}
                select
                options={[
                  { label: 'Department 1', value: 'department1' },
                  { label: 'Department 2', value: 'department2' },
                ]}
                inputRules={{ required: 'Department is required' }}
              />
              <FormField
                label="Description"
                control={control}
                name="description"
                multiline
                rows={2}
                inputRules={{ required: 'Description is required' }}
              />
              <Grid item xs={12}>
                <PrimaryButton type="submit">
                  Submit
                </PrimaryButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default AddDegree;
