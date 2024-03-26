import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import { Assessment, Event, Person } from '@mui/icons-material';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InternCardContainer = styled.div`
  padding: 20px;
`;

const InternCardStyled = styled.div`
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.colors.ui.secondary}; /* Change border color */
  background: ${(props) => props.theme.colors.ui.tertiary}; /* Change background color */
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  width: 1017px;
  height: 266px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const InternImageWrapper = styled.div`
  width: 210px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
`;

const InternImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InternDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InternName = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.primary}; /* Change text color */
    font-family: ${(props) => props.theme.fonts.heading}; /* Change font family */
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const CompanyName = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.secondary}; /* Change text color */
    font-family: ${(props) => props.theme.fonts.body}; /* Change font family */
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const Duration = styled(Typography)`
  && {
    color: ${(props) => props.theme.colors.text.secondary}; /* Change text color */
    font-family: ${(props) => props.theme.fonts.body}; /* Change font family */
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const IconButtons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    background: ${(props) => props.theme.colors.ui.secondary}; /* Change button background color */
    margin-right: 10px;
    &:hover {
      background: ${(props) => props.theme.colors.ui.primary}; /* Change button hover background color */
    }
  }
`;

const InternCard = ({ internData }) => {
  const { internName, companyName, duration } = internData;

  return (
    <InternCardContainer>
      <InternCardStyled>
        <InternImageWrapper>
          <InternImage src={require('../assets/profile.png')} alt="Intern" />
        </InternImageWrapper>
        <InternDetails>
          <InternName>{internName}</InternName>
          <CompanyName>{companyName}</CompanyName>
          <Duration>{duration}</Duration>
          <IconButtons>
            <Link to="/industrySupervisor/evaluation">
              <StyledButton variant="contained" startIcon={<Assessment />}>Evaluation</StyledButton>
            </Link>
            <Link to="/industrySupervisor/diary">
              <StyledButton variant="contained" startIcon={<Event />}>Diary</StyledButton>
            </Link>
            <Link to="/industrySupervisor/viewintern">
              <StyledButton variant="contained" startIcon={<Person />}>View Intern</StyledButton>
            </Link>
          </IconButtons>
        </InternDetails>
      </InternCardStyled>
    </InternCardContainer>
  );
};

export default InternCard;
