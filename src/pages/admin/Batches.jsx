import React, { useState } from 'react';
import { Card, CardContent, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [rowData, setRowData] = useState({});

  const handleEditClick = (row) => {
    console.log('Editing row:', row);
  };

  const handleDeleteClick = (row) => {
    console.log('Deleting row:', row);
    setDeleteDialogOpen(true);
  };

  const handleViewClick = (row) => {
    setRowData(row);
    setViewDialogOpen(true);
  };

  const handleCloseViewDialog = () => {
    setViewDialogOpen(false);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = (row) => {
    console.log('Confirmed deletion of row:', row);
    setDeleteDialogOpen(false);
  };

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
      renderCell: (params) => (
        <div>
          <Visibility color="primary" style={{ cursor: 'pointer', marginRight: 5 }} onClick={() => handleViewClick(params.row)} />
          <Edit color="primary" style={{ cursor: 'pointer', marginRight: 5 }} onClick={() => handleEditClick(params.row)} />
          <Delete color="error" style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(params.row)} />
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this batch?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleConfirmDelete()} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onClose={handleCloseViewDialog}>
        <DialogTitle>View Batch Details</DialogTitle>
        <DialogContent>
          <p>Academic Year: {rowData.academicYear}</p>
          <p>Batch: {rowData.batch}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseViewDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default Batches;
