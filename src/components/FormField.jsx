import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import styled from 'styled-components';

export default function FormField({
  label,
  placeholder = "",
  inputType = "text",
  control,
  name,
  inputRules = {},
  options = [],
  rows = 1,
}) {
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        rules={inputRules}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <Fragment>
            <Grid item xs={12} sm={6}>
              {inputType === "select" ? (
                <FormControl fullWidth variant="outlined" required style={{ marginBottom: '20px' }}>
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
              ) : (
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error ? error.message : null}
                  multiline
                  rows={rows}
                  style={{ marginBottom: '20px' }}
                />
              )}
            </Grid>
            {/* {error && <ErrorMsg className="errorMsg">{error.message}</ErrorMsg>} */}
          </Fragment>
        )}
      />
    </Fragment>
  );
}
