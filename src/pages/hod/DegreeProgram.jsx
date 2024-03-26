import React from 'react';
import { Link } from 'react-router-dom';
import { AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';
import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton';
import CustomDataGrid from '../../components/CustomDataGrid';

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

const Degree = () => {
  const heading = 'Degree';
  const path = ['HOD', 'Degrees'];

  // Sample data for the data grid
  const rows = [
    { id: 1, degreeName: 'Degree A', faculty: 'Faculty A', department: 'Department A', description: 'Description A' },
    { id: 2, degreeName: 'Degree B', faculty: 'Faculty B', department: 'Department B', description: 'Description B' },
    // Add more sample data as needed
  ];

  const columns = [
    { field: 'degreeName', headerName: 'Degree Name', width: 200 },
    { field: 'faculty', headerName: 'Faculty', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'description', headerName: 'Description', width: 400 },
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
        <Link to="/admin/addPages/add-degree" style={{ textDecoration: 'none' }}>
          <PrimaryButton>
            <AddCircle />
            Add New Degree
          </PrimaryButton>
        </Link>
      </AddButtonContainer>
      <CustomDataGrid rows={rows} columns={columns} pageSize={5} />
    </PageContainer>
  );
};

export default Degree;
