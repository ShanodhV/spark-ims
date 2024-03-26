import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import InternCard from '../../components/InternCard';

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

const InternCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const IsInternship = () => {
  const heading = 'My Mentee';
  const path = ['Supervisor', 'Internship'];

  // Sample intern data
  const internData = [
    {
      internName: 'John Doe',
      companyName: 'Company A',
      duration: 'Duration of Internship: 24 March 2024 - 25 March 2025',
    },
    {
      internName: 'Jane Doe',
      companyName: 'Company B',
      duration: 'Duration of Internship: 24 March 2024 - 25 March 2025',
    },
  ];

  return (
    <>
      <ContentContainer>
        <HeadingContainer>
          <Heading>{heading}</Heading>
          <Path>{path.join(' / ')}</Path>
        </HeadingContainer>
        
        <InternCardContainer>
          {internData.map((data, index) => (
            <InternCard key={index} internData={data} />
          ))}
        </InternCardContainer>
      </ContentContainer>
    </>
  );
};

export default IsInternship;

