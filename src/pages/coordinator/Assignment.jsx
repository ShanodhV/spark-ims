import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
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

const Assignment = () => {
  const heading = 'Assignments Page';
  const path = ['Coordinator', 'Assignments'];

  // Sample data for the table
  const rows = [
    { id: 1, title: 'Assignment 1', deadline: '2024-03-30', status: 'Pending' },
    { id: 2, title: 'Assignment 2', deadline: '2024-04-05', status: 'Completed' },
    { id: 3, title: 'Assignment 3', deadline: '2024-04-10', status: 'Pending' },
    { id: 4, title: 'Assignment 4', deadline: '2024-04-15', status: 'Pending' },
    { id: 5, title: 'Assignment 5', deadline: '2024-04-20', status: 'Completed' },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'deadline', headerName: 'Deadline', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
  ];

  return (
    <ContentContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <LabelTypography variant="body1">Assignments Table</LabelTypography>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </ContentContainer>
  );
};

export default Assignment;
