import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../../components/PrimaryButton';

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

const AddFaculty = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const heading = 'Add Faculty';
  const path = ['Admin', 'Add Faculty'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Faculty Name:', name);
    console.log('Description:', description);
    // Reset the input fields after submission
    setName('');
    setDescription('');
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
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Faculty Name"
                  variant="outlined"
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <PrimaryButton type="submit">
                  Submit
                </PrimaryButton>
              </form>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AddFaculty;
