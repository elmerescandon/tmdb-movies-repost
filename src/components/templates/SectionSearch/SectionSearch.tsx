import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch/useFetch';
import usePage from '../../../hooks/usePage/usePage';
import useQueryParams from '../../../hooks/useQueryParams/useQueryParams';

import FilterBarSearch from '../../molecules/FilterBarSearch/FilterBarSearch';
import Loader from '../../molecules/Loader/Loader';
import LibrarySearch from '../../organisms/LibrarySearch/LibrarySearch';

import TMDBService from '../../../services/TMDB/TMDB.service';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import IContent from '../../../utils/interfaces/TMDB/IContent';
import { updateSearchParams } from '../../../utils/helpers';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import './SectionSearch.scss';

const waitGif = require('../../../images/homeAlone.gif');

const SectionSearch = () => {
  const { searchParams, updateParams } = useQueryParams(updateSearchParams);
  const dataService = TMDBService.getInstance();
  const { data, loading, error } = useFetch<
  IDiscover | undefined,
  URLSearchParams
  >(dataService.searchContent, searchParams);

  const [state, dispatch] = usePage(1, 10, 100);
  const { page, count } = state;

  const onChangeSearch = (newText: string) => {
    updateParams({ search: newText, page: null });
  };

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
    updateParams({
      search: null,
      page: newPage,
    });
  };

  useEffect(() => {
    if (data !== undefined) {
      dispatch({ type: 'SET_COUNT', count: data.totalPages });
    }
  }, [data]);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        What do you want to watch today?!
      </Typography>
      <FilterBarSearch onChangeSearch={onChangeSearch} />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined && data.results.length !== 0 ? (
        <Box>
          <LibrarySearch content={data.results as IContent[]} />
          <PaginationBox handlePage={handlePage} page={page} count={count} />
        </Box>
      ) : (
        <Box className="section-search--wait">
          <img
            className="section-search__image--wait"
            src={waitGif}
            alt="home-alone-wait"
          />
        </Box>
      )}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </Container>
  );
};

export default SectionSearch;
