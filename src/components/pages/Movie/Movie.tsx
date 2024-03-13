import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import useFetch from '../../../hooks/useFetch/useFetch';
import Header from '../../organisms/Header/Header';
import DetailMovie from '../../templates/DetailMovie/DetailMovie';
import Loader from '../../molecules/Loader/Loader';
import TMDBService from '../../../services/TMDB/TMDB.service';
import IMovie from '../../../utils/interfaces/TMDB/IMovie';
import './Movie.scss';

const Movie = () => {
  const dataService = TMDBService.getInstance();
  const { movieId } = useParams();
  const { data, loading, error } = useFetch<IMovie, string | undefined>(
    dataService.getMovie,
    movieId,
  );
  return (
    <div className="movie">
      <Header />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined ? (
        <DetailMovie movie={data as IMovie} />
      ) : null}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </div>
  );
};

export default Movie;
