import React from 'react';
import { AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';
import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton';
import CustomDataGrid from '../../components/CustomDataGrid';
import { Link } from 'react-router-dom';

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

const AddButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const Organization = () => {
  const heading = 'Organizations';
  const path = ['Admin', 'Organizations'];

  // Sample data for the data grid
  const rows = [
    { id: 1, name: 'Organization A', industry: 'Industry A', address: 'Address A' },
    { id: 2, name: 'Organization B', industry: 'Industry B', address: 'Address B' },
    // Add more sample data as needed
  ];

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'industry', headerName: 'Industry', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: () => (
        <div>
          <Visibility color="primary" style={{ cursor: 'pointer', marginRight: 5 }} />
          <Edit color="primary" style={{ cursor: 'pointer', marginRight: 5 }} />
          <Delete color="error" style={{ cursor: 'pointer' }} />
        </div>
      ),
    },
  ];

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <AddButtonContainer>
      <Link to="/admin/addPages/add-organization" style={{ textDecoration: 'none' }}>
          <PrimaryButton>
            <AddCircle />
            Add New Organization
          </PrimaryButton>
        </Link>
      </AddButtonContainer>
      <CustomDataGrid rows={rows} columns={columns} pageSize={5} />
    </PageContainer>
  );
};

export default Organization;
