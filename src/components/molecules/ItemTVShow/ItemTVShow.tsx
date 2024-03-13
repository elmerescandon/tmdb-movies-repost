import { Box } from '@mui/material';
import IDiscoverTVShow from '../../../utils/interfaces/TMDB/IDiscoverTVShow';
import './ItemTVShow.scss';
import LinkContainer from '../../atoms/Links/LinkContainer/LinkContainer';
import PageRoutes from '../../../utils/routes/Routes';

const tvShowDefault = require('../../../images/movieTesting.jpg');

type ItemTVShowProps = {
  tvShow: IDiscoverTVShow;
};

const ItemTVShow = ({ tvShow }: ItemTVShowProps) => {
  const { name, backdropPath, id } = tvShow;
  const imageURL = backdropPath !== null
    ? `http://image.tmdb.org/t/p/original${backdropPath}`
    : tvShowDefault;
  return (
    <LinkContainer path={`${PageRoutes.TV_SHOW}/${id}`}>
      <Box
        className="item-tv-show"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
        url(${imageURL})`,
        }}
      >
        <div className="item-tv-show__title">{name}</div>
      </Box>
    </LinkContainer>
  );
};

export default ItemTVShow;
