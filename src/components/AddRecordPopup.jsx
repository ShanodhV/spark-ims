import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const AddRecordPopup = ({ onClose, onSaveDraft, onSubmit }) => {
  const [record, setRecord] = useState('');
  const [hours, setHours] = useState('');

  const handleSaveDraft = () => {
    onSaveDraft({ record, hours });
    onClose();
  };

  const handleSubmit = () => {
    onSubmit({ record, hours });
    onClose();
  };

  return (
    <PopupContainer>
      <h3>Add Record</h3>
      <Input
        type="text"
        placeholder="Enter your daily record"
        value={record}
        onChange={(e) => setRecord(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Number of hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <ButtonContainer>
        <Button onClick={handleSaveDraft}>Save Draft</Button>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ButtonContainer>
    </PopupContainer>
  );
};

export default AddRecordPopup;
