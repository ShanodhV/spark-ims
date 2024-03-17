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

const Department = () => {
  const heading = 'Departments';
  const path = ['Admin', 'Departments'];

  // Sample data for the data grid
  const rows = [
    { id: 1, departmentName: 'Department A', facultyName: 'Faculty A', HOD: 'John Doe', description: 'Description A', internship: 'Enabled', project: 'Disabled', research: 'Enabled' },
    { id: 2, departmentName: 'Department B', facultyName: 'Faculty B', HOD: 'Jane Doe', description: 'Description B', internship: 'Disabled', project: 'Enabled', research: 'Disabled' },
    // Add more sample data as needed
  ];

  const columns = [
    { field: 'departmentName', headerName: 'Department Name', width: 200 },
    { field: 'facultyName', headerName: 'Faculty Name', width: 200 },
    { field: 'HOD', headerName: 'HOD', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'internship', headerName: 'Internship', width: 150 },
    { field: 'project', headerName: 'Project', width: 150 },
    { field: 'research', headerName: 'Research', width: 150 },
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
      <Link to="/admin/addPages/add-department" style={{ textDecoration: 'none' }}>
          <PrimaryButton>
            <AddCircle />
            Add New Department
          </PrimaryButton>
        </Link>
      </AddButtonContainer>
      <CustomDataGrid rows={rows} columns={columns} pageSize={5} />
    </PageContainer>
  );
};

export default Department;
