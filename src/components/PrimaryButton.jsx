import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)`
  && {
    display: flex;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #27AE60;
    color: #fff;
    text-decoration: none;

  }
`;

const PrimaryButton = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
