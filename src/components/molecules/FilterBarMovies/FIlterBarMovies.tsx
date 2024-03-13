import { Box } from '@mui/material';
import FormSelect from '../../atoms/Forms/FormSelect/FormSelect';
import ICertification from '../../../utils/interfaces/ICertification';
import IGenre from '../../../utils/interfaces/IGenre';
import { certificationsToSelect, genresToSelect } from '../../../utils/helpers';
import FormReleaseYear from '../../atoms/Forms/FormReleaseYear/FormReleaseYear';
import './FilterBarMovies.scss';

type FilterBarMoviesProps = {
  certifications: ICertification[];
  genres: IGenre[];
  onChangeCertification: (newValue: string) => void;
  onChangeGenres: (newValue: string) => void;
  onChangeReleaseYear: (year: number[]) => void;
};

const FilterBarMovies = ({
  certifications,
  genres,
  onChangeCertification,
  onChangeGenres,
  onChangeReleaseYear,
}: FilterBarMoviesProps) => (
  <Box className="filter-bar-movies">
    <FormSelect
      name="Certification"
      slug="certification"
      items={certificationsToSelect(certifications)}
      onChange={onChangeCertification}
    />
    <FormSelect
      name="Genres"
      slug="genres"
      items={genresToSelect(genres)}
      onChange={onChangeGenres}
    />
    <FormReleaseYear label="Release Year" onChange={onChangeReleaseYear} />
  </Box>
);

export default FilterBarMovies;
