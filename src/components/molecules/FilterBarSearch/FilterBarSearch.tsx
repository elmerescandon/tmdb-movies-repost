import { Box } from '@mui/material';
import FormText from '../../atoms/Forms/FormText/FormText';

type FilterBarSearchProps = {
  onChangeSearch: (newText: string) => void;
};

const FilterBarSearch = ({ onChangeSearch }: FilterBarSearchProps) => (
  <Box className="filter-bar-search">
    <FormText
      label=""
      type="text"
      validationFunction={() => true}
      onChange={onChangeSearch}
      errorMessage="Search not valid, please return alphanumerical values only."
      maxLengthText={50}
      placeholder="Write a movie or tv show"
    />
  </Box>
);

export default FilterBarSearch;
