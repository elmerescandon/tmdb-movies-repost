import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { debounce } from 'lodash';
import { DEBOUNCE_TIME_MS } from '../../../../utils/constants';
import './FormText.scss';

type FormTextProps = {
  label: string;
  type: string;
  validationFunction: (newInput: string) => boolean;
  onChange: (newInput: string) => void;
  errorMessage: string;
  maxLengthText: number;
  placeholder: string;
};

const FormText = ({
  label,
  type,
  validationFunction,
  onChange,
  errorMessage,
  maxLengthText,
  placeholder,
}: FormTextProps) => {
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validationFunction(e.target.value)) {
      onChange(e.target.value);
      setError(false);
      return;
    }
    setError(true);
  };

  const debounceHandleChange = debounce(handleChange, DEBOUNCE_TIME_MS);

  return (
    <Box className="form-text">
      <Typography variant="h6">{label}</Typography>
      <TextField
        sx={{ width: 500, maxWidth: '100%' }}
        placeholder={placeholder}
        error={error}
        type={type}
        onChange={debounceHandleChange}
        helperText={error ? errorMessage : ''}
        inputProps={{ maxLength: maxLengthText }}
      />
    </Box>
  );
};

export default FormText;
