import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, TextField, Card, CardContent } from '@mui/material';
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

const SearchTypography = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.primary};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 10px;
  }
`;

const LabelTypography = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.secondary};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
  }
`;

const SearchField = styled(TextField)`
  && {
    width: 100%; /* Adjust width to 100% */
    margin-right: 0; /* Remove right margin */
    margin-bottom: 10px;
  }
`;

const StyledCard = styled(Card)`
  && {
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.colors.ui.secondary};
    background: ${(props) => props.theme.colors.bg.secondary};
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CInternship = () => {
  const heading = 'Internship Page';
  const path = ['Coordinator', 'Internship'];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <StyledCard>
          <CardContent>
            <SearchTypography variant="body1">Search Batch</SearchTypography>
            <Grid container spacing={2} alignItems="center"> {/* Added spacing */}
              {/* <Grid item xs={12} sm={12} md={6}> {/* Adjusted grid size for smaller screens 
                <LabelTypography variant="body1">Status</LabelTypography>
                <SearchField
                  select
                  variant="outlined"
                  fullWidth
                  defaultValue=""
                  placeholder="Select Status"
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="upcoming">Upcoming</option>
                </SearchField>
              </Grid> */}
              <Grid item xs={12} sm={12} md={6}> {/* Adjusted grid size for smaller screens */}
                <LabelTypography variant="body1">Academic Year</LabelTypography>
                <SearchField
                  select
                  variant="outlined"
                  fullWidth
                  defaultValue=""
                  placeholder="Select Academic Year"
                >
                  <option value="2022-2023">2022-2023</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                </SearchField>
              </Grid>
            </Grid>
          </CardContent>
        </StyledCard>
        <CustomDataGrid
          rows={[]} // Pass data rows 
          columns={[]} // Pass data columns
          pageSize={5} 
        />
      </ContentContainer>
    </>
  );
};

export default CInternship;
