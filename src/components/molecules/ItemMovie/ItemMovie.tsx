import { Box } from '@mui/material';
import IDiscoverMovie from '../../../utils/interfaces/TMDB/IDiscoverMovie';
import LinkContainer from '../../atoms/Links/LinkContainer/LinkContainer';
import PageRoutes from '../../../utils/routes/Routes';
import './ItemMovie.scss';

const movieDefault = require('../../../images/movieTesting.jpg');

type ItemMovieProps = {
  movie: IDiscoverMovie;
};
const ItemMovie = ({ movie }: ItemMovieProps) => {
  const { title, id, backdropPath } = movie;
  const imageURL = backdropPath !== null
    ? `http://image.tmdb.org/t/p/original${backdropPath}`
    : movieDefault;
  return (
    <LinkContainer path={`${PageRoutes.MOVIE}/${id}`}>
      <Box
        className="item-movie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${imageURL})`,
          backgroundColor: 'transparent',
        }}
      >
        <div className="item-movie__title">{title}</div>
      </Box>
    </LinkContainer>
  );
};

export default ItemMovie;
