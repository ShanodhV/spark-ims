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

const AddHolidayPopup = ({ onClose, onSaveDraft, onMakeHoliday }) => {
  const [holidayType, setHolidayType] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSaveDraft = () => {
    onSaveDraft({ holidayType, remarks });
    onClose();
  };

  const handleMakeHoliday = () => {
    onMakeHoliday({ holidayType, remarks });
    onClose();
  };

  return (
    <PopupContainer>
      <h3>Add Holiday</h3>
      <Input
        type="text"
        placeholder="Holiday Type"
        value={holidayType}
        onChange={(e) => setHolidayType(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
      />
      <ButtonContainer>
        <Button onClick={handleSaveDraft}>Save Draft</Button>
        <Button onClick={handleMakeHoliday}>Make Holiday</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ButtonContainer>
    </PopupContainer>
  );
};

export default AddHolidayPopup;
