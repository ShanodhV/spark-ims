import React from 'react';
import { Modal, Button } from 'rsuite';

const HolidayPopup = ({ open, onClose, selectedDate }) => {
  const handleMakeHoliday = () => {
    // Logic to make holiday
  };

  const handleSaveDraft = () => {
    // Logic to save as draft
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Select Holiday Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Date: {selectedDate}</p>
        {/* Your form fields here */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleMakeHoliday} appearance="primary">
          Make Holiday
        </Button>
        <Button onClick={handleSaveDraft} appearance="subtle">
          Save Draft
        </Button>
        <Button onClick={handleCancel} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HolidayPopup;
