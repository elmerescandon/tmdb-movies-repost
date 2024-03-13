import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import './FormSelect.scss';
import IMenuItem from '../../../../utils/interfaces/IMenuItem';

type FormSelectProps = {
  name: string;
  slug: string;
  items: IMenuItem[];
  onChange: (newValue: string) => void;
};

const FormSelect = ({
  name, slug, items, onChange,
}: FormSelectProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <Box className="form-select">
      <FormControl className="form-select__form">
        <InputLabel id={`${slug}-label`}>{name}</InputLabel>
        <Select
          className="form-select__select"
          labelId={`${slug}-label`}
          id={slug}
          value={value}
          onChange={handleChange}
          label={`${slug}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect;
