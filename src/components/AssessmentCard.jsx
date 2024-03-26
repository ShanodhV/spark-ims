import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CardContainer = styled.div`
  width: calc(33.33% - 20px);
  max-width: 250px;
  min-width: 200px;
  padding: 20px;
  margin: 10px;
  background-color: #E0FFEE;
  border-radius: 10px;
  border-bottom: 5px solid #2ECC71;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardText = styled.div`
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.form};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const StyledButton = styled(Button)`
  background-color: #2ECC71 !important;
  color: white !important;
  &:hover {
    background-color: #27AE60 !important;
  }
`;

const AssessmentCard = ({ assignmentNumber, course, date }) => {
  return (
    <CardContainer>
      <CardText>Assignment Number {assignmentNumber}</CardText>
      <CardText>{course}</CardText>
      <CardText>{date}</CardText>
      <ButtonContainer>
        <StyledButton variant="contained" startIcon={<CloudDownloadIcon />}>Download</StyledButton>
        <StyledButton variant="contained" startIcon={<CloudUploadIcon />}>Submit</StyledButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default AssessmentCard;
