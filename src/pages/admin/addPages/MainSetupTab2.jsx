import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import PrimaryButton from '../../../components/PrimaryButton';
import { ChromePicker } from 'react-color';

const PageContainer = styled.div`
  padding: 20px;
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  background: #EFFDF5;
`;

const ThemeColorBox = styled.div`
  border-radius: 6px;
  border: 3px solid #FFF;
  background: ${(props) => props.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 280px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  z-index: 1;
`;

const MainSetupTab2 = () => {
  const [primaryColor, setPrimaryColor] = useState('#27AE60');
  const [secondaryColor, setSecondaryColor] = useState('#2980B9');
  const [ternaryColor, setTernaryColor] = useState('#E74C3C');
  const [activeColorPicker, setActiveColorPicker] = useState(null);

  const handleColorBoxClick = (color) => {
    setActiveColorPicker(color);
  };

  const handleColorChange = (color) => {
    switch (activeColorPicker) {
      case 'primary':
        setPrimaryColor(color.hex);
        break;
      case 'secondary':
        setSecondaryColor(color.hex);
        break;
      case 'ternary':
        setTernaryColor(color.hex);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    // Logic to save the selected theme colors
    console.log('Primary Color:', primaryColor);
    console.log('Secondary Color:', secondaryColor);
    console.log('Ternary Color:', ternaryColor);
  };

  return (
    <PageContainer>
      <StyledCard variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Theme Color (Primary Color)</Typography>
              <ThemeColorBox color={primaryColor} onClick={() => handleColorBoxClick('primary')} />
              {activeColorPicker === 'primary' && (
                <ColorPickerContainer>
                  <ChromePicker color={primaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Theme Color (Secondary Color)</Typography>
              <ThemeColorBox color={secondaryColor} onClick={() => handleColorBoxClick('secondary')} />
              {activeColorPicker === 'secondary' && (
                <ColorPickerContainer>
                  <ChromePicker color={secondaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Muted Color (Secondary Color)</Typography>
              <ThemeColorBox color={secondaryColor} onClick={() => handleColorBoxClick('secondary')} />
              {activeColorPicker === 'secondary' && (
                <ColorPickerContainer>
                  <ChromePicker color={secondaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Button Color (Primary Color)</Typography>
              <ThemeColorBox color={primaryColor} onClick={() => handleColorBoxClick('primary')} />
              {activeColorPicker === 'primary' && (
                <ColorPickerContainer>
                  <ChromePicker color={primaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Button Color (Secondary Color)</Typography>
              <ThemeColorBox color={secondaryColor} onClick={() => handleColorBoxClick('secondary')} />
              {activeColorPicker === 'secondary' && (
                <ColorPickerContainer>
                  <ChromePicker color={secondaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1">Button Color (Ternary)</Typography>
              <ThemeColorBox color={ternaryColor} onClick={() => handleColorBoxClick('ternary')} />
              {activeColorPicker === 'ternary' && (
                <ColorPickerContainer>
                  <ChromePicker color={ternaryColor} onChange={handleColorChange} />
                </ColorPickerContainer>
              )}
            </Grid>
            <Grid item xs={12}>
              <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
};

export default MainSetupTab2;
