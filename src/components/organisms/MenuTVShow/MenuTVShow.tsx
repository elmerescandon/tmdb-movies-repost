import { Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ButtonFavorite from '../../atoms/Buttons/ButtonFavorite/ButtonFavorite';
import ButtonBack from '../../atoms/Buttons/ButtonBack/ButtonBack';
import { State } from '../../../state/store';
import {
  userAddFavoriteTvShow,
  userDeleteFavoriteTvShow,
} from '../../../state/action-creators/UserActionCreators';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';
import TMDBService from '../../../services/TMDB/TMDB.service';

type MenuTVShowProps = {
  tvShowItem: IUserFavoriteItem;
};

const MenuTVShow = ({ tvShowItem }: MenuTVShowProps) => {
  const { id } = tvShowItem;
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
    user.favorites.tvShows.filter((tvShow) => tvShow.id === id)
      .length > 0;
  const handleFavorite = () => {
    if (user.logged) {
      if (isFavoriteHandler()) {
        dispatch(userDeleteFavoriteTvShow(tvShowItem));
        setFavoriteAPI(false, id, 'tv');
        return;
      }
      dispatch(userAddFavoriteTvShow(tvShowItem));
      setFavoriteAPI(true, id, 'tv');
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

export default MenuTVShow;
