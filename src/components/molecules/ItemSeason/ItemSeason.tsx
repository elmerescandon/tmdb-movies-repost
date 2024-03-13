import { Box, Typography } from '@mui/material';
import LinkContainer from '../../atoms/Links/LinkContainer/LinkContainer';
import PageRoutes from '../../../utils/routes/Routes';
import IDiscoverSeason from '../../../utils/interfaces/TMDB/IDiscoverSeason';
import './ItemSeason.scss';

const seasonDefault = require('../../../images/movieTesting.jpg');

type ItemSeasonProps = {
  season: IDiscoverSeason;
  tvShowId: number;
  tvShowName: string;
};

const ItemSeason = ({ season, tvShowId, tvShowName }: ItemSeasonProps) => {
  const {
    posterPath, name, episodeCount, seasonNumber,
  } = season;
  const imageURL = posterPath !== null
    ? `http://image.tmdb.org/t/p/original${posterPath}`
    : seasonDefault;
  return (
    <LinkContainer
      path={`${PageRoutes.TV_SHOW}/${tvShowId}${PageRoutes.TV_SEASON}/${seasonNumber}`}
    >
      <Box
        className="item-season"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
  url(${imageURL})`,
        }}
      >
        <Box className="item-season__names">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{`Episodes: ${episodeCount}`}</Typography>
          <Typography variant="body2">{tvShowName}</Typography>
        </Box>
      </Box>
    </LinkContainer>
  );
};

export default ItemSeason;
