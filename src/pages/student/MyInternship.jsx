import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import { EmailOutlined, EditNote } from '@mui/icons-material'; // Imported icons
import AssessmentCard from '../../components/AssessmentCard';

const PageContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
`;

const LeftColumn = styled.div`
  flex-basis: 400px;
  margin-right: 20px;
`;

const RightColumn = styled.div`
  flex-grow: 1;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
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

const CardContainer = styled.div`
  border-radius: 10px;
  background-color: #E0FFEE;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardHeading = styled.div`
  text-align: left;
  margin-bottom:10px;
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const ProfileContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileDetails = styled.div`
  text-align: center;
`;
const Name = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: 5px;
`;

const Degree = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: 5px;
`;

const Work = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: 5px;
`;

const Date = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.text.secondary};
`;
const SupervisorContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SupervisorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SupervisorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const SupervisorDetails = styled.div`
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  color: ${(props) => (props.isRed ? 'red' : 'blue')} !important;
  border-color: ${(props) => (props.isRed ? 'red' : 'blue')} !important;
`;

const SpaceBetweenButtons = styled.div`
  margin-left: 10px;
`;

const AssessmentSec = styled(CardHeading)`
  margin-top: 20px;
  padding: 20px;
`;

const AssessmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MyInternship = () => {
  const heading = 'My Internship';
  const path = ['Student', 'MyIntern'];

  const supervisors = [
    { name: 'Supervisor 1', post: 'Course Coordinator' },
    { name: 'Supervisor 2', post: 'Assistant Coordinator' },
  ];

  return (
    <>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <PageContainer>
        <LeftColumn>
          <CardHeading variant="h6">My Profile</CardHeading>
          <CardContainer>
            <ProfileContainer>
              <ProfileImage src={require('../../assets/profile.png')} alt="Profile" />
              <ProfileDetails>
                <Name className='name'>Student Name</Name>
                <Degree className='degree'>Bsc (Hons) Software Engineering</Degree>
                <Work className='work'>Xenosys Software Solutions</Work>
                <Date className='date'>24 March 2024 - 24 August 2024</Date>
              </ProfileDetails>

            </ProfileContainer>
          </CardContainer>
        </LeftColumn>
        <RightColumn>
          <CardHeading variant="h6">My Supervisors</CardHeading>
          <CardContainer>
            <SupervisorContainer>
              {supervisors.map((supervisor, index) => (
                <SupervisorRow key={index}>
                  <SupervisorImage src={require('../../assets/profile.png')} alt="Supervisor" />
                  <SupervisorDetails>
                    <Typography>{`Name: ${supervisor.name}`}</Typography>
                    <Typography>{`Post: ${supervisor.post}`}</Typography>
                  </SupervisorDetails>
                  <Button variant="outlined" color="primary" startIcon={<EmailOutlined />}>
                    Email
                  </Button>
                </SupervisorRow>
              ))}
              <SupervisorRow>
                <SupervisorImage src={require('../../assets/profile.png')} alt="Supervisor" />
                <SupervisorDetails>
                  <Typography>{`Name: Supervisor 4`}</Typography>
                  <Typography>{`Post: Project Coordinator`}</Typography>
                </SupervisorDetails>
                <Button variant="outlined" color="primary" startIcon={<EmailOutlined />}>
                  Email
                </Button>
                <SpaceBetweenButtons />
                <StyledButton variant="outlined" isRed={true} startIcon={<EditNote />}>
                  Change
                </StyledButton>
              </SupervisorRow>
            </SupervisorContainer>
          </CardContainer>
        </RightColumn>
      </PageContainer>
      <AssessmentSec>
        <CardHeading variant="h6">My Assessments</CardHeading>
        <AssessmentContainer>
          <AssessmentCard assignmentNumber="01" course="BBA 42026: Internship" date="16-Feb-2024" download="" submit="" percentage={50} />
          <AssessmentCard assignmentNumber="02" course="BBA 42026: Internship" date="18-Feb-2024" download="" submit="" percentage={75} />
          <AssessmentCard assignmentNumber="03" course="BBA 42026: Internship" date="20-Feb-2024" download="" submit="" percentage={90} />
        </AssessmentContainer>
      </AssessmentSec>
    </>
  );
};

export default MyInternship;
