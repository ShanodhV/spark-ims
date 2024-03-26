import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import AssessmentCard from '../../components/AssessmentCard';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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

const AssessmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center; 
`;

const Assessment = () => {
  const heading = 'Assessment';
  const path = ['Home', 'Assessment'];

  // Sample assessment data
  const assessments = [
    { id: 1, title: 'Assignment 1', course: 'Mathematics', date: '2024-01-15', grade: 'A' },
    { id: 2, title: 'Assignment 2', course: 'Physics', date: '2024-02-10', grade: 'B' },
    { id: 3, title: 'Assignment 3', course: 'Chemistry', date: '2024-03-05', grade: 'C' },
    // Add more assessments as needed
  ];

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading variant="h4">{heading}</Heading>
        <Path variant="body2">{path.join(' / ')}</Path>
      </HeadingContainer>
      <AssessmentContainer>
        {assessments.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            title={assessment.title}
            course={assessment.course}
            date={assessment.date}
            grade={assessment.grade}
          />
        ))}
      </AssessmentContainer>
    </PageContainer>
  );
};

export default Assessment;
