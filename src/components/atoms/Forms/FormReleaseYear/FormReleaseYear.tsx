import React, { useState } from 'react';
import { debounce } from 'lodash';
import { Box, TextField } from '@mui/material';
import {
  DEBOUNCE_TIME_MS,
  MAX_RELEASE_YEAR,
  MIN_RELEASE_YEAR,
} from '../../../../utils/constants';
import { isValidReleaseYear } from '../../../../utils/helpers';
import './FormReleaseYear.scss';

type FormReleaseYearProps = {
  label: string;
  onChange: (years: number[]) => void;
};

const FormReleaseYear = ({ label, onChange }: FormReleaseYearProps) => {
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidReleaseYear(e.target.value)) {
      const releaseYear = parseInt(e.target.value, 10);
      if (releaseYear >= MIN_RELEASE_YEAR && releaseYear <= MAX_RELEASE_YEAR) {
        onChange([parseInt(e.target.value, 10)]);
        setError(false);
        return;
      }
    }

    if (e.target.value === '') {
      onChange([]);
      setError(false);
      return;
    }

    setError(true);
  };

  const debounceHandleChange = debounce(handleChange, DEBOUNCE_TIME_MS);

  return (
    <Box className="form-release-year">
      <TextField
        error={error}
        placeholder="1999, 2001, etc"
        onChange={debounceHandleChange}
        helperText={
          error
            ? `Only a number from ${MIN_RELEASE_YEAR}  to ${MAX_RELEASE_YEAR}`
            : ''
        }
        inputProps={{ maxLength: 15 }}
        label={label}
      />
    </Box>
  );
};

export default FormReleaseYear;
