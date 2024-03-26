import React from 'react';
import styled from 'styled-components';
import ViewIntern from '../../components/ViewIntern'; 

const ViewInternPageContainer = styled.div`
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

const ViewInternPage = () => {
  const heading = 'View Intern';
  const path = ['Supervisor ', 'View Intern'];

  // Sample intern data for testing
  const internData = {
    internName: 'John Doe',
    id: '12345',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    recipientAddress: '123 Main St, City, Country',
    requestSentAt: '2024-02-15',
    requestStatus: 'Pending',
    progress: 50,
  };

  return (
    <ViewInternPageContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <ViewIntern internData={internData} />
    </ViewInternPageContainer>
  );
};

export default ViewInternPage;
