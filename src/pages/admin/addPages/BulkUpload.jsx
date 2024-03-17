import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
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

const WarningMessage = styled.div`
  border: 2px solid red;
  border-radius: 10px;
  background-color: #FEE;
  padding: 10px;
  margin-bottom: 20px;
`;

const BulkUpload = () => {
  const [degreeProgram, setDegreeProgram] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [course, setCourse] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>User Bulk Upload</Heading>
        <Path>Admin / Bulk Upload</Path>
      </HeadingContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Degree Program"
                  variant="outlined"
                  value={degreeProgram}
                  onChange={(e) => setDegreeProgram(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Academic Year"
                  variant="outlined"
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Course"
                  variant="outlined"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <WarningMessage>
                  <Typography variant="body1" color="error" fontWeight="bold">
                    Once you 'Upload,' you won't be able to undo this action
                  </Typography>
                </WarningMessage>
                <Typography variant="body1" color="textPrimary">
                  Please upload an Excel file (.csv) with the following columns in the first sheet:
                  Email/FullName/RegistrationNumber/IndexNumber
                  You must upload the sheet with above field name header row.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept=".csv"
                  id="csv-upload"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="csv-upload">
                  <PrimaryButton component="span" startIcon={<AddCircle />} style={{ marginTop: 20 }}>
                    Upload File
                  </PrimaryButton>
                </label>
                {selectedFile && <Typography>{selectedFile.name}</Typography>}
              </Grid>
              <Grid item xs={12}>
                <PrimaryButton type="submit" style={{ marginTop: 20 }}>
                  Upload
                </PrimaryButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default BulkUpload;
