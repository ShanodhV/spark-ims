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

const Request = () => {
  const heading = 'Internship Request';
  const path = ['Coordinator', 'Internship Request'];

  // Sample data for the table
  const rows = [
    { id: 1, studentName: 'John Doe', company: 'ABC Corp', status: 'Pending' },
    { id: 2, studentName: 'Jane Smith', company: 'XYZ Inc', status: 'Approved' },
    { id: 3, studentName: 'Alice Johnson', company: '123 Industries', status: 'Pending' },
    { id: 4, studentName: 'Bob Brown', company: 'Tech Solutions', status: 'Rejected' },
    { id: 5, studentName: 'Emily Davis', company: 'Global Tech', status: 'Approved' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'studentName', headerName: 'Student Name', width: 150 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        <LabelTypography variant="body1">Internship Requests</LabelTypography>
        <CustomDataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
        />
      </ContentContainer>
    </>
  );
};

export default Request;
