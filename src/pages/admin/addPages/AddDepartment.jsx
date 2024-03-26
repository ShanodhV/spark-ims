import React from 'react';
import { Card, CardContent, Grid, FormGroup, FormControlLabel, Switch, Typography } from '@mui/material';
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

const AddDepartment = () => {
  const { control, handleSubmit, reset } = useForm(); // Destructure control, handleSubmit, and reset from useForm

  const heading = 'Add Department';
  const path = ['Admin', 'Add Department'];

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
                label="Department Name"
                control={control}
                name="name"
                inputRules={{ required: 'Department name is required' }}
              />
              <FormField
                label="Description"
                control={control}
                name="description"
                multiline
                rows={4}
                inputRules={{ required: 'Description is required' }}
              />
              <Grid item xs={12} sm={6}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="logo-input"
                  type="file"
                  onChange={(e) => {}}
                />
                <label htmlFor="logo-input">
                  <PrimaryButton component="span">
                    Upload Logo
                  </PrimaryButton>
                </label>
                {/* Display uploaded logo name */}
                <Typography>No file chosen</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormGroup style={{ justifyContent: 'flex-end' }}>
                  <FormControlLabel
                    control={<Switch color="success" />}
                    label="Internship Model Activated"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Switch color="success" />}
                    label="Project Model Activated"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Switch color="success" />}
                    label="Research Model Activated"
                    labelPlacement="start"
                  />
                </FormGroup>
              </Grid>
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

export default AddDepartment;
