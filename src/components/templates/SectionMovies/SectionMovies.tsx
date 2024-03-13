import { Box, Typography } from '@mui/material';

import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch/useFetch';
import useQueryParams from '../../../hooks/useQueryParams/useQueryParams';
import usePage from '../../../hooks/usePage/usePage';

import FilterBarMovies from '../../molecules/FilterBarMovies/FIlterBarMovies';
import Loader from '../../molecules/Loader/Loader';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import LibraryMovie from '../../organisms/LIbraryMovie/LibraryMovie';

import TMDBService from '../../../services/TMDB/TMDB.service';
import { addSearchParamsDiscoverMovie } from '../../../utils/helpers';
import movieCertification from '../../../utils/mockups/movieCertification';
import movieGenres from '../../../utils/mockups/movieGenres';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import IDiscoverMovie from '../../../utils/interfaces/TMDB/IDiscoverMovie';

import './SectionMovies.scss';

const SectionMovies = () => {
  const dataService = TMDBService.getInstance();
  const { searchParams, updateParams } = useQueryParams(
    addSearchParamsDiscoverMovie,
  );
  const { data, loading, error } = useFetch<IDiscover, URLSearchParams>(
    dataService.discoverMovies,
    searchParams,
  );

  const [state, dispatch] = usePage(1, 10, 100);
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
    updateParams({
      certification: null,
      genre: null,
      primaryReleaseYear: null,
      page: newPage,
    });
  };

  const onChangeCertification = (newValue: string) => {
    updateParams({
      certification: newValue,
      genre: null,
      primaryReleaseYear: null,
      page: null,
    });
    dispatch({ type: 'SET_PAGE', page: 1 });
  };

  const onChangeGenres = (newValue: string) => {
    updateParams({
      primaryReleaseYear: null,
      page: null,
      genre: newValue,
      certification: null,
    });
    dispatch({ type: 'SET_PAGE', page: 1 });
  };

  const onChangeReleaseYear = (year: number[]) => {
    updateParams({
      page: null,
      genre: null,
      certification: null,
      primaryReleaseYear: year.join(','),
    });
    dispatch({ type: 'SET_PAGE', page: 1 });
  };

  useEffect(() => {
    if (data !== undefined) {
      dispatch({ type: 'SET_COUNT', count: data.totalPages });
    }
  }, [data]);

  return (
    <Box className="section-movies">
      <Typography variant="h3">Movies</Typography>
      <FilterBarMovies
        certifications={movieCertification}
        genres={movieGenres}
        onChangeCertification={onChangeCertification}
        onChangeGenres={onChangeGenres}
        onChangeReleaseYear={onChangeReleaseYear}
      />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined && data.results.length > 0 ? (
        <Box>
          <LibraryMovie movies={data.results as IDiscoverMovie[]} />
          <PaginationBox handlePage={handlePage} page={page} count={count} />
        </Box>
      ) : <Typography gutterBottom variant="h5">No movies were found...</Typography>}
      {error !== '' ? <Typography variant="h5">{error}</Typography> : null}
    </Box>
  );
};

export default SectionMovies;
