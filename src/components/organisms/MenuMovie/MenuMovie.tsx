import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  userAddFavoriteMovie,
  userDeleteFavoriteMovie,
} from '../../../state/action-creators/UserActionCreators';
import ButtonFavorite from '../../atoms/Buttons/ButtonFavorite/ButtonFavorite';
import ButtonBack from '../../atoms/Buttons/ButtonBack/ButtonBack';
import { State } from '../../../state/store';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';
import TMDBService from '../../../services/TMDB/TMDB.service';

type MenuMovieProps = {
  movieItem: IUserFavoriteItem;
};

const MenuMovie = ({ movieItem }: MenuMovieProps) => {
  const { id } = movieItem;
  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const setFavoriteAPI = async (favorite: boolean, itemId: number, mediaType: string) => {
    const service = TMDBService.getInstance();
    if (user.userInfo !== null) {
      await service.markFavorite(
        { favorite, mediaId: itemId, mediaType },
        user.userInfo,
      );
    }
  };

  const isFavoriteHandler = () =>
    user.favorites.movies.filter((movie) => movie.id === id).length > 0;

  const handleFavorite = () => {
    if (user.logged) {
      if (isFavoriteHandler()) {
        dispatch(userDeleteFavoriteMovie(movieItem));
        setFavoriteAPI(false, id, 'movie');
        return;
      }
      dispatch(userAddFavoriteMovie(movieItem));
      setFavoriteAPI(true, id, 'movie');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: 3,
        paddingBottom: 3,
        paddingTop: 3,
      }}
    >
      <ButtonBack />
      <ButtonFavorite
        handleFavorite={handleFavorite}
        isFavorite={isFavoriteHandler()}
      />
    </Container>
  );
};

export default MenuMovie;
