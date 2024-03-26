import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import styled from 'styled-components';
import PrimaryButton from '../../components/PrimaryButton';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const PageContainer = styled.div`
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

const StyledCard = styled(Card)`
  border-radius: 10px;
  background: #EFFDF5;
`;

const Buttoncontainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const AddAssessment = () => {
  const [templateName, setTemplateName] = useState('');
  const [questions, setQuestions] = useState([{ number: '1', text: EditorState.createEmpty() }]);

  const handleAddQuestion = () => {
    const newQuestionNumber = questions.length + 1;
    setQuestions([...questions, { number: `${newQuestionNumber}`, text: EditorState.createEmpty() }]);
  };

  const handleQuestionChange = (index, editorState) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = editorState;
    setQuestions(updatedQuestions);
  };

  const handleSaveTemplate = () => {
    // Handle saving template logic here
    console.log('Template Name:', templateName);
    console.log('Questions:', questions.map(q => convertToRaw(q.text.getCurrentContent())));
  };

  return (
    <PageContainer>
      <HeadingContainer>
        <Heading>Add New Assignment</Heading>
        <Path>Coordinator/Add Assignment</Path>
      </HeadingContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledCard variant="outlined">
            <CardContent>
              <TextField
                label="Assignment Name"
                variant="outlined"
                fullWidth
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                style={{ marginBottom: '20px' }}
              />
              {questions.map((question, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <TextField
                    label="Question Number"
                    variant="outlined"
                    value={question.number}
                    InputProps={{ readOnly: true }}
                    style={{ marginBottom: '10px', marginRight: '20px' }}
                  />
                  <EditorWrapper>
                    <Editor
                      editorState={question.text}
                      wrapperClassName="draft-wrapper"
                      editorClassName="draft-editor"
                      onEditorStateChange={(editorState) => handleQuestionChange(index, editorState)}
                    />
                  </EditorWrapper>
                </div>
              ))}
              <Buttoncontainer>
                <PrimaryButton onClick={handleAddQuestion} style={{ marginRight: '20px' }}>
                  Add Question
                </PrimaryButton>
                <PrimaryButton onClick={handleSaveTemplate}>
                  Save Assignment
                </PrimaryButton>
              </Buttoncontainer>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AddAssessment;
