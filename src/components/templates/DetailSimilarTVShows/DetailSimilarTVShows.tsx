import { Box, Container, Typography } from '@mui/material';
import ItemTVShow from '../../molecules/ItemTVShow/ItemTVShow';
import IDiscoverTVShow from '../../../utils/interfaces/TMDB/IDiscoverTVShow';
import IDiscover from '../../../utils/interfaces/TMDB/IDiscover';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import { ITEMS_PER_PAGE } from '../../../utils/constants';
import usePage from '../../../hooks/usePage/usePage';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';
import './DetailSimilarTVShows.scss';

type DetailSimilarTVShowsProps = {
  similar: IDiscover | IUserFavoriteItem[];
  titleContainer: string;
};

const DetailSimilarTVShows = ({
  similar,
  titleContainer,
}: DetailSimilarTVShowsProps) => {
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
      <Box className="detail-similar-tv-shows">
        <Typography variant="h4">{titleContainer}</Typography>
        {results.length > 0 ? (
          <Box>
            <Box className="detail-similar-tv-shows__shows">
              {results
                .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
                .map((tvShow) => (
                  <ItemTVShow
                    key={(tvShow as IDiscoverTVShow).id}
                    tvShow={tvShow as IDiscoverTVShow}
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

export default DetailSimilarTVShows;
