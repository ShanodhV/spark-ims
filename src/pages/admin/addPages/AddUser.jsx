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

const AddUser = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm(); // Destructure errors from formState

  const heading = 'Add User';
  const path = ['Admin', 'Add User'];

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
                label="Role"
                control={control}
                name="role"
                select
                options={[
                  { label: 'Role 1', value: 'role1' },
                  { label: 'Role 2', value: 'role2' },
                ]}
                inputRules={{ required: 'Role is required' }}
                errors={errors}
                xs={12}
                sm={6}
              />
              <FormField
                label="Email Address"
                control={control}
                name="email"
                inputRules={{ required: 'Email is required' }}
                errors={errors}
                xs={12}
                sm={6}
              />
              <FormField
                label="Full Name"
                control={control}
                name="fullName"
                inputRules={{ required: 'Full name is required' }}
                errors={errors}
                xs={12}
              />
            </Grid>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default AddUser;
