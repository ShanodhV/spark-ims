import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDataGrid from '../../components/CustomDataGrid';
import PrimaryButton from '../../components/PrimaryButton';
import { AddCircle } from '@mui/icons-material';

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

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const AssTemp = () => {
  // Sample data for the table
  const templates = [
    { id: 1, name: 'Template 1', description: 'Description of Template 1' },
    { id: 2, name: 'Template 2', description: 'Description of Template 2' },
    { id: 3, name: 'Template 3', description: 'Description of Template 3' },
    // Add more template objects as needed
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
  ];

  return (
    <ContentContainer>
      <HeadingContainer>
        <Heading>Assignment Templates</Heading>
        <Path>Coordinator / Assignment / Templates</Path>
      </HeadingContainer>
      <ButtonContainer>
      <Link to="/coordinator/addAssTemp" style={{ textDecoration: 'none' }}>
            <PrimaryButton>
                <AddCircle />
                Add New Assignment
            </PrimaryButton>
          </Link>
      </ButtonContainer>
      <CustomDataGrid
          rows={templates}
          columns={columns}
          pageSize={5}
        />
    </ContentContainer>
  );
};

export default AssTemp;
