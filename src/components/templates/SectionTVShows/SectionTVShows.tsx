import { Box, Typography } from '@mui/material';
import useFetch from '../../../hooks/useFetch/useFetch';
import usePage from '../../../hooks/usePage/usePage';
import useQueryParams from '../../../hooks/useQueryParams/useQueryParams';

import FilterBarTVShows from '../../molecules/FilterBarTVShows/FilterBarTVShows';
import Loader from '../../molecules/Loader/Loader';
import LibraryTVShows from '../../organisms/LibraryTVShows/LibraryTVShows';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';

import TMDBService from '../../../services/TMDB/TMDB.service';
import tvShowGenres from '../../../utils/mockups/tvShowGenres';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import IDiscoverTVShow from '../../../utils/interfaces/TMDB/IDiscoverTVShow';
import { addSearchParamsDiscoverTVShow } from '../../../utils/helpers';

import './SectionTVShows.scss';

const SectionTVShows = () => {
  const dataService = TMDBService.getInstance();

  const { searchParams, updateParams } = useQueryParams(
    addSearchParamsDiscoverTVShow,
  );

  const { data, loading, error } = useFetch<IDiscover, URLSearchParams>(
    dataService.discoverTVShows,
    searchParams,
  );

  const [state, dispatch] = usePage(1, 10, 100);
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
    updateParams({
      genre: null,
      primaryReleaseYear: null,
      page: newPage,
    });
  };

  const onChangeGenres = (newValue: string) => {
    dispatch({ type: 'SET_PAGE', page: 1 });
    updateParams({ page: null, primaryReleaseYear: null, genre: newValue });
  };

  const onChangeReleaseYear = (year: number[]) => {
    dispatch({ type: 'SET_PAGE', page: 1 });
    updateParams({ page: null, primaryReleaseYear: year.join(','), genre: null });
  };
  return (
    <Box className="section-tv-shows">
      <Typography variant="h3">TV Shows</Typography>
      <FilterBarTVShows
        genres={tvShowGenres}
        onChangeGenres={onChangeGenres}
        onChangeReleaseYear={onChangeReleaseYear}
      />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined && data.results.length > 0 ? (
        <Box>
          <LibraryTVShows tvShows={data.results as IDiscoverTVShow[]} />
          <PaginationBox handlePage={handlePage} page={page} count={count} />
        </Box>
      ) : <Typography gutterBottom variant="h5">No TV shows were found...</Typography>}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </Box>
  );
};
export default SectionTVShows;
