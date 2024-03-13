import { Box } from '@mui/material';
import IDiscoverMovie from '../../../utils/interfaces/TMDB/IDiscoverMovie';
import ItemMovie from '../../molecules/ItemMovie/ItemMovie';
import './LibraryMovie.scss';

type LibraryMovieProps = {
  movies: IDiscoverMovie[];
};

const LibraryMovie = ({ movies }: LibraryMovieProps) => (
  <Box className="library-movie">
    {movies.map((movie) => (
      <ItemMovie key={movie.id} movie={movie} />
    ))}
  </Box>
);

export default LibraryMovie;
