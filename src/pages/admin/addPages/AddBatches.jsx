import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../../components/PrimaryButton';
import FormField from '../../../components/FormField';
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

const AddBatches = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm(); // Destructure errors from formState

  const heading = 'Add Batches';
  const path = ['Admin', 'Add Batches'];

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
                <FormField
                  label="Batch Number"
                  control={control}
                  name="batchNumber"
                  inputRules={{ required: "Batch number is required" }}
                  errors={errors}
                  fullWidth
                  style={{ marginBottom: '20px' }}
                />
                <FormField
                  label="Description"
                  control={control}
                  name="description"
                  inputRules={{ required: "Description is required" }}
                  multiline
                  errors={errors}
                  fullWidth
                  style={{ marginBottom: '20px' }}
                  rows={6} 
                />
                <PrimaryButton type="submit">Submit</PrimaryButton>
              </form>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AddBatches;
