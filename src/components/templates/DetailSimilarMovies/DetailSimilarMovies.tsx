import { Box, Container, Typography } from '@mui/material';
import usePage from '../../../hooks/usePage/usePage';
import ItemMovie from '../../molecules/ItemMovie/ItemMovie';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import IDiscoverMovie from '../../../utils/interfaces/TMDB/IDiscoverMovie';
import { ITEMS_PER_PAGE } from '../../../utils/constants';
import './DetailSimilarMovies.scss';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';

type DetailSimilarMoviesProps = {
  similar: IDiscover | IUserFavoriteItem[];
  titleContainer: string;
};

const DetailSimilarMovies = ({
  similar,
  titleContainer,
}: DetailSimilarMoviesProps) => {
  const results = 'results' in similar ? similar.results : similar;

  const [state, dispatch] = usePage(
    1,
    results.length,
    Math.ceil(results.length / ITEMS_PER_PAGE),
  );
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
  };
  return (
    <Container sx={{ paddingTop: 2 }}>
      <Box className="detail-similar-movies">
        <Typography variant="h4">{titleContainer}</Typography>
        {results.length > 0 ? (
          <Box>
            <Box className="detail-similar-movies__movies">
              {results
                .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
                .map((movie) => (
                  <ItemMovie
                    key={(movie as IDiscoverMovie).id}
                    movie={movie as IDiscoverMovie}
                  />
                ))}
            </Box>
            <PaginationBox page={page} count={count} handlePage={handlePage} />
          </Box>
        ) : (
          <Typography variant="subtitle1">No data found...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default DetailSimilarMovies;
