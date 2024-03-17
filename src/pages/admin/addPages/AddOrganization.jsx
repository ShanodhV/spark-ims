import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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

const AddOrganization = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Organization Name:', organizationName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('Website:', website);
    console.log('Industry:', industry);
    console.log('Size:', size);
    // Reset the input fields after submission
    setOrganizationName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setWebsite('');
    setIndustry('');
    setSize('');
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>Add Organization</Heading>
        <Path>Admin / Add Organization</Path>
      </HeadingContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Organization Name"
                  variant="outlined"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Website"
                  variant="outlined"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="industry-label">Industry</InputLabel>
                  <Select
                    labelId="industry-label"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    label="Industry"
                  >
                    <MenuItem value="industry1">Industry 1</MenuItem>
                    <MenuItem value="industry2">Industry 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="size-label">Size</InputLabel>
                  <Select
                    labelId="size-label"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    label="Size"
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
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

export default AddOrganization;
