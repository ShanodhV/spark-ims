import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { Typography, Grid } from '@mui/material';
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
const LabelTypography = styled(Typography)`
&& {
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
}
`;

const CEvaluation = () => {
  const heading = 'Evaluation Page';
  const path = ['Coordinator', 'Evaluation'];

  // Sample data for the table
  const rows = [
    { id: 1, name: 'John Doe', score: 85, status: 'Pass' },
    { id: 2, name: 'Jane Smith', score: 70, status: 'Pass' },
    { id: 3, name: 'Alice Johnson', score: 60, status: 'Fail' },
    { id: 4, name: 'Bob Brown', score: 95, status: 'Pass' },
    { id: 5, name: 'Emily Davis', score: 75, status: 'Pass' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'score', headerName: 'Score', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <LabelTypography variant="body1">Evaluation Table</LabelTypography>        <CustomDataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
        />
      </ContentContainer>
    </>
  );
};

export default CEvaluation;
