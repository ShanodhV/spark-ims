import React from 'react';
import { Button } from '@mui/material';
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
  display: flex;
  align-items: center;
`;

const BulkUploadButton = styled(Button)`
  && {
    background-color: #3498DB;
    color: #FFF;
    margin-left: 10px;
  }
`;

const Cuser = () => {
  const heading = 'Users';
  const path = ['Coordinator', 'Users'];

  // Sample data for the data grid
  const rows = [
    { id: 1, facultyRole: 'Faculty', name: 'John Doe', email: 'john@example.com', registrationStatus: 'Active' },
    { id: 2, facultyRole: 'Admin', name: 'Jane Smith', email: 'jane@example.com', registrationStatus: 'Inactive' },
    // Add more sample data as needed
  ];

  const columns = [
    { field: 'facultyRole', headerName: 'Faculty Role', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'registrationStatus', headerName: 'Registration Status', width: 200 },
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
      <Link to="/admin/addPages/add-user" style={{ textDecoration: 'none' }}>
          <PrimaryButton>
            <AddCircle />
            Add New User
          </PrimaryButton>
        </Link>
      <Link to="/admin/addPages/bulk-upload" style={{ textDecoration: 'none' }}>
        <BulkUploadButton variant="contained">Bulk Upload</BulkUploadButton>
      </Link>
      </AddButtonContainer>
      <CustomDataGrid rows={rows} columns={columns} pageSize={5} />
    </PageContainer>
  );
};

export default Cuser;
