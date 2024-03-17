import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import PrimaryButton from '../../../components/PrimaryButton';

const PageContainer = styled.div`
  padding: 20px;
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  background: #EFFDF5;
`;

const MainSetupTab3 = () => {
  return (
    <PageContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Service Configuration</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Parameter</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Email Service</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell>nbtchathuranga@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Password</TableCell>
                  <TableCell>••••••••••••••••</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SMTP Server</TableCell>
                  <TableCell>smtp.gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Port</TableCell>
                  <TableCell>465</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container justifyContent="flex-start">
            <PrimaryButton>Save</PrimaryButton>
          </Grid>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default MainSetupTab3;
