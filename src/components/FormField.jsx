import React from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormField = ({ label, value, onChange, variant, fullWidth, select, options }) => {
  if (select) {
    return (
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
          <Select
            labelId={`${label.toLowerCase()}-label`}
            value={value}
            onChange={onChange}
            label={label}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        required
      />
    </Grid>
  );
};

export default FormField;
