import { Box } from '@mui/material';
import FormSelect from '../../atoms/Forms/FormSelect/FormSelect';
import IGenre from '../../../utils/interfaces/IGenre';
import { genresToSelect } from '../../../utils/helpers';
import FormReleaseYear from '../../atoms/Forms/FormReleaseYear/FormReleaseYear';
import './FilterBarTVShows.scss';

type FilterBarTVShowsProps = {
  genres: IGenre[];
  onChangeGenres: (newValue: string) => void;
  onChangeReleaseYear: (year: number[]) => void;
};

const FilterBarTVShows = ({
  genres,
  onChangeGenres,
  onChangeReleaseYear,
}: FilterBarTVShowsProps) => (
  <Box className="filter-bar-tv-shows">
    <FormSelect
      name="Genres"
      slug="genres"
      items={genresToSelect(genres)}
      onChange={onChangeGenres}
    />
    <FormReleaseYear label="Release Year" onChange={onChangeReleaseYear} />
  </Box>
);

export default FilterBarTVShows;
