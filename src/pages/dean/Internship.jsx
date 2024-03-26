import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { Typography, Grid, TextField } from '@mui/material';
import CustomDataGrid from '../../components/CustomDataGrid';

const ContentContainer = styled.div`
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

const SearchField = styled(TextField)`
  && {
    width: calc(50% - 10px); /* Set width to 50% minus some margin */
    margin-right: 20px;
    margin-bottom: 10px; /* Add some bottom margin */
  }
`;

const Internship = () => {
  const heading = 'Internship Page';
  const path = ['Dean', 'Internship'];

  return (
    <>

      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <Typography>Search Batch</Typography>
        <Grid container spacing={0} alignItems="center" marginBottom={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Status</Typography>
            <SearchField
              select
              variant="outlined"
              fullWidth
              defaultValue="" /* Set default value to empty string */
              placeholder="Select Status" /* Add placeholder text */
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </SearchField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Academic Year</Typography>
            <SearchField
              select
              variant="outlined"
              fullWidth
              defaultValue="" /* Set default value to empty string */
              placeholder="Select Academic Year" /* Add placeholder text */
            >
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
            </SearchField>
          </Grid>
        </Grid>
        <CustomDataGrid
          rows={[]} // Pass data rows 
          columns={[]} // Pass data columns
          pageSize={5} 
        />
      </ContentContainer>
    </>
  );
};

export default Internship;
