import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ViewInternContainer = styled.div`
  padding: 20px;
`;

const ViewInternCard = styled.div`
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.colors.ui.secondary};
  background: ${(props) => props.theme.colors.bg.secondary};
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  width: 1000px;
  height: 500px;
  display: flex;
`;

const LeftColumn = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 60%;
  padding: 20px;
`;

const InternImageWrapper = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const InternImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProgressBarWrapper = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 70%;
  height: 20px;
  margin-bottom: 20px;
`;

const Progress = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: ${(props) => props.progress}%;
  height: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 2px;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  border: 3px solid ${(props) => props.theme.colors.button.primary};
  background-color: transparent;
  gap: 10px;
  color: ${(props) => props.theme.colors.button.primary};
  border-radius: 5px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.ui.secondary};
    color: ${(props) => props.theme.colors.text.tertiary};
  }
`;

const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 460px;
`;

const ProgressText = styled.div`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom:10px;
  `;


const ViewIntern = ({ internData, progColor, progSize }) => {
  if (!internData) return null;

  const { internName, id, phone, email, startDate, endDate, recipientAddress, requestSentAt, requestStatus, progress } = internData;

  return (
    <ViewInternContainer>
      <ViewInternCard>
        <LeftColumn>
          <InternImageWrapper>
            <InternImage src={require('../assets/profile.png')} alt="Intern" />
          </InternImageWrapper>
          <ProgressBarWrapper>
            <Progress progress={progress}></Progress>
          </ProgressBarWrapper>
          <ProgressText className='prog' color={progColor} size={progSize}>Progress:{progress}%</ProgressText>
          <ButtonGroup>
            <ActionButton><EmailIcon /> Email</ActionButton>
            <ActionButton><PhoneIcon /> Call</ActionButton>
            <ActionButton><WhatsAppIcon /> WhatsApp</ActionButton>
          </ButtonGroup>
        </LeftColumn>
        <Divider />
        <RightColumn>
          <DetailsContainer>
            <DetailsRow>
              <div>Name:</div>
              <div>{internName}</div>
            </DetailsRow>
            <DetailsRow>
              <div>ID:</div>
              <div>{id}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Phone:</div>
              <div>{phone}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Email:</div>
              <div>{email}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Start Date:</div>
              <div>{startDate}</div>
            </DetailsRow>
            <DetailsRow>
              <div>End Date:</div>
              <div>{endDate}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Recipient Address:</div>
              <div>{recipientAddress}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Request Sent At:</div>
              <div>{requestSentAt}</div>
            </DetailsRow>
            <DetailsRow>
              <div>Request Status:</div>
              <div>{requestStatus}</div>
            </DetailsRow>
          </DetailsContainer>
        </RightColumn>
      </ViewInternCard>
    </ViewInternContainer>
  );
};

export default ViewIntern;
