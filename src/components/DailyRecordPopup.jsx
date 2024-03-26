import React from 'react';
import { Modal, Button } from 'rsuite';

const DailyRecordPopup = ({ open, onClose, selectedDate }) => {
  const handleSaveDraft = () => {
    // Logic to save as draft
  };

  const handleSubmit = () => {
    // Logic to submit
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Enter Your Daily Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Date: {selectedDate}</p>
        {/* Your form fields here */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSaveDraft} appearance="subtle">
          Save Draft
        </Button>
        <Button onClick={handleSubmit} appearance="primary">
          Submit
        </Button>
        <Button onClick={handleCancel} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DailyRecordPopup;
