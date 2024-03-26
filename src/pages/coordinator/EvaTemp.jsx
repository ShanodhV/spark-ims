import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import CustomDataGrid from '../../components/CustomDataGrid';
import { Link } from 'react-router-dom';
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

const EvaTemp = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Template 1', description: 'Evaluation template 1' },
    { id: 2, name: 'Template 2', description: 'Evaluation template 2' },
    { id: 3, name: 'Template 3', description: 'Evaluation template 3' },
  ]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
  ];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>Evaluation Templates</Heading>
          <Path>Coordinator / Evaluation / Templates</Path>
        </HeadingContainer>
        <ButtonContainer>
        <Link to="/coordinator/addEvaTemp" style={{ textDecoration: 'none' }}>
            <PrimaryButton>
                <AddCircle />
                Add New Template
            </PrimaryButton>
          </Link>
        </ButtonContainer>
        <CustomDataGrid
          rows={templates}
          columns={columns}
          pageSize={5}
        />
      </ContentContainer>
    </>
  );
};

export default EvaTemp;
