import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch/useFetch';
import Header from '../../organisms/Header/Header';
import Loader from '../../molecules/Loader/Loader';
import DetailShow from '../../templates/DetailShow/DetailShow';
import TMDBService from '../../../services/TMDB/TMDB.service';
import ITVShow from '../../../utils/interfaces/TMDB/ITVShow';
import './TVShow.scss';

const TVShow = () => {
  const dataService = TMDBService.getInstance();
  const { showId } = useParams();
  const { data, loading, error } = useFetch<ITVShow, string | undefined>(
    dataService.getShow,
    showId,
  );

  return (
    <div className="tv-show">
      <Header />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined ? (
        <DetailShow tvShow={data as ITVShow} />
      ) : null}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </div>
  );
};

export default TVShow;
