import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PrimaryButton from '../../components/PrimaryButton';
import CustomDataGrid from '../../components/CustomDataGrid';


const PageContainer = styled.div`
  padding: 20px;
  position: relative;
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

const BatchesContent = styled.div`
  overflow: auto;
  max-height: calc(100vh - 160px);
`;

const Batches = () => {
  const heading = 'Batches';
  const path = ['Admin', 'Batches'];

  const rows = [
    { id: 1, academicYear: '2022-2023', batch: 'Batch A' },
    { id: 2, academicYear: '2023-2024', batch: 'Batch B' },
    { id: 3, academicYear: '2024-2025', batch: 'Batch C' },
  ];

  const columns = [
    { field: 'academicYear', headerName: 'Academic Year', width: 200 },
    { field: 'batch', headerName: 'Batch', width: 200 },
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
        <Link to="/admin/addpages/add-batches" style={{ textDecoration: 'none' }}>
          <PrimaryButton>
            <AddCircle />
            Add New Batches
          </PrimaryButton>
        </Link>
      </AddButtonContainer>
      <BatchesContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <CustomDataGrid rows={rows} columns={columns} pageSize={5} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </BatchesContent>
    </PageContainer>
  );
};

export default Batches;
