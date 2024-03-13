import { Box, Container, Typography } from '@mui/material';
import usePage from '../../../hooks/usePage/usePage';
import PaginationBox from '../../molecules/PaginationBox/PaginationBox';
import IDiscoverSeason from '../../../utils/interfaces/TMDB/IDiscoverSeason';
import ItemSeason from '../../molecules/ItemSeason/ItemSeason';
import './DetailSeasons.scss';
import { ITEMS_PER_PAGE } from '../../../utils/constants';

type DetailSeasonsProps = {
  seasons: IDiscoverSeason[];
  tvShowId: number;
  tvShowName: string;
};

const DetailSeasons = ({
  seasons,
  tvShowId,
  tvShowName,
}: DetailSeasonsProps) => {
  const [state, dispatch] = usePage(
    1,
    seasons.length,
    Math.ceil(seasons.length / ITEMS_PER_PAGE),
  );
  const { page, count } = state;

  const handlePage = (newPage: number) => {
    dispatch({ type: 'SET_PAGE', page: newPage });
  };

  return (
    <Container>
      <Typography variant="h4">Seasons</Typography>
      <Box className="detail-seasons__seasons">
        {seasons
          .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
          .map((season) => (
            <ItemSeason
              key={season.id}
              season={season}
              tvShowId={tvShowId}
              tvShowName={tvShowName}
            />
          ))}
      </Box>
      <PaginationBox handlePage={handlePage} page={page} count={count} />
    </Container>
  );
};
export default DetailSeasons;
