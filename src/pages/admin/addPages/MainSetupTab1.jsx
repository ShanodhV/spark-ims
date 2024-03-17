import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Grid, TextField, Typography, FormControlLabel, Switch } from '@mui/material';
import PrimaryButton from '../../../components/PrimaryButton';

// Define styled components
const StyledCard = styled(Card)`
  border-radius: 10px;
  background: #EFFDF5;
`;

const MainSetupTab1 = () => {
  const [universityName, setUniversityName] = useState('University of Ruhuna');
  const [universityShortName, setUniversityShortName] = useState('UOR');
  const [description, setDescription] = useState(`The University of Ruhuna, established by a Special Presidential Decree in 1978 and elevated to a fully-fledged university in 1984, is Sri Lanka's sixth oldest University. It is the only University in the country's southern region, with ten faculties spread across three prominent locations.`);
  const [studentCount, setStudentCount] = useState(1200);
  const [isPaidVersion, setIsPaidVersion] = useState(false);
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('University Name:', universityName);
    console.log('University Short Name:', universityShortName);
    console.log('Description:', description);
    console.log('Allowed Student Count:', studentCount);
    console.log('Is Paid Version:', isPaidVersion);
    console.log('Logo:', logo);
  };

  return (
    <StyledCard variant="outlined">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="University Name"
                variant="outlined"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="University Short Name"
                variant="outlined"
                value={universityShortName}
                onChange={(e) => setUniversityShortName(e.target.value)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Allowed Student Count"
                variant="outlined"
                value={studentCount}
                onChange={(e) => setStudentCount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ marginRight: 'auto' }}>Is Paid Version</Typography>
              <FormControlLabel
                control={<Switch color="success" checked={isPaidVersion} onChange={(e) => setIsPaidVersion(e.target.checked)} />}
                label=""
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept=".png"
                style={{ display: 'none' }}
                id="logo-input"
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
              />
              <label htmlFor="logo-input">
                <PrimaryButton component="span">
                  Upload Logo
                </PrimaryButton>
              </label>
              {logo && <Typography>{logo.name}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <PrimaryButton type="submit">
                Save
              </PrimaryButton>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </StyledCard>
  );
};

export default MainSetupTab1;
