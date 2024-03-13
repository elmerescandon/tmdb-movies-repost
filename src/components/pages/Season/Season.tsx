import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../molecules/Loader/Loader';
import Header from '../../organisms/Header/Header';
import SectionSeason from '../../templates/SectionSeasons/SectionSeason';
import useFetch from '../../../hooks/useFetch/useFetch';
import TMDBService from '../../../services/TMDB/TMDB.service';
import ISeason from '../../../utils/interfaces/TMDB/ISeason';
import ISeasonParams from '../../../utils/interfaces/ISeasonParams';
import './Season.scss';

const Season = () => {
  const dataService = TMDBService.getInstance();
  const pageParams = useParams();
  const fetchParams = useMemo(() => {
    const { showId, seasonId } = pageParams;
    return { showId, seasonId };
  }, [pageParams]);
  const { data, loading, error } = useFetch<ISeason, ISeasonParams>(
    dataService.getSeason,
    fetchParams,
  );
  return (
    <div className="season">
      <Header />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined ? (
        <SectionSeason season={data as ISeason} />
      ) : null}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </div>
  );
};

export default Season;
