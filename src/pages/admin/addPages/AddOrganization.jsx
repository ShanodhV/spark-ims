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

const AddOrganization = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm(); // Destructure errors from formState

  const heading = 'Add Organization';
  const path = ['Admin', 'Add Organization'];

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledCard variant="outlined">
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Organization Name"
                      control={control}
                      name="organizationName"
                      inputRules={{ required: "Organization name is required" }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Email"
                      control={control}
                      name="email"
                      inputRules={{ required: "Email is required" }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Phone Number"
                      control={control}
                      name="phoneNumber"
                      inputRules={{ required: "Phone number is required" }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Address"
                      control={control}
                      name="address"
                      inputRules={{ required: "Address is required" }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Website"
                      control={control}
                      name="website"
                      inputRules={{ required: "Website is required" }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Industry"
                      control={control}
                      name="industry"
                      select
                      options={[
                        { label: 'Industry 1', value: 'industry1' },
                        { label: 'Industry 2', value: 'industry2' },
                      ]}
                      inputRules={{ required: 'Industry is required' }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      label="Size"
                      control={control}
                      name="size"
                      select
                      options={[
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                      ]}
                      inputRules={{ required: 'Size is required' }}
                      errors={errors}
                      fullWidth
                      style={{ marginBottom: '20px' }}
                    />
                  </Grid>
                </Grid>
                <PrimaryButton type="submit">Submit</PrimaryButton>
              </form>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AddOrganization;
