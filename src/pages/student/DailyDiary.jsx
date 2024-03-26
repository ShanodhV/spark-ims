import React from 'react';
import styled from 'styled-components';
import CalendarComponent from '../../components/CalendarComponent'; // Import the CalendarComponent

const DiaryContainer = styled.div`
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

const DailyDiary = () => {
  const heading = 'Diary';
  const path = ['Student', 'Diary'];

  return (
    <DiaryContainer>
      <HeadingContainer>
        <Heading>{heading}</Heading>
        <Path>{path.join(' / ')}</Path>
      </HeadingContainer>
      <CalendarComponent /> {/* Render the CalendarComponent here */}
    </DiaryContainer>
  );
};

export default DailyDiary;
