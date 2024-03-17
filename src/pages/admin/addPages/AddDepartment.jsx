import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Switch, Typography } from '@mui/material';
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

const AddDepartment = () => {
  const [faculty, setFaculty] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState(null);
  const [internshipModelActivated, setInternshipModelActivated] = useState(false);
  const [projectModelActivated, setProjectModelActivated] = useState(false);
  const [researchModelActivated, setResearchModelActivated] = useState(false);

  const heading = 'Add Department';
  const path = ['Admin', 'Add Department'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Faculty:', faculty);
    console.log('Department Name:', name);
    console.log('Description:', description);
    console.log('Logo:', logo);
    console.log('Internship Model Activated:', internshipModelActivated);
    console.log('Project Model Activated:', projectModelActivated);
    console.log('Research Model Activated:', researchModelActivated);
    // Reset the input fields after submission
    setFaculty('');
    setName('');
    setDescription('');
    setLogo(null);
    setInternshipModelActivated(false);
    setProjectModelActivated(false);
    setResearchModelActivated(false);
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
                <TextField
                  fullWidth
                  label="Department Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
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
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="logo-input"
                  type="file"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
                <label htmlFor="logo-input">
                  <PrimaryButton component="span" startIcon={<AddCircle />}>
                    Upload Logo
                  </PrimaryButton>
                </label>
                {logo && <Typography>{logo.name}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch color="success" checked={internshipModelActivated} onChange={(e) => setInternshipModelActivated(e.target.checked)} />}
                    label="Internship Model Activated"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Switch color="success" checked={projectModelActivated} onChange={(e) => setProjectModelActivated(e.target.checked)} />}
                    label="Project Model Activated"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Switch color="success" checked={researchModelActivated} onChange={(e) => setResearchModelActivated(e.target.checked)} />}
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
