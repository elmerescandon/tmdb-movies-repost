import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TMDBService from '../../services/TMDB/TMDB.service';
import ILogin from '../../utils/interfaces/ILogin';
import {
  userAddFavoriteMovieGroup, userAddFavoriteTvShowGroup, userDeleteAllFavorites, userLogIn,
} from '../../state/action-creators/UserActionCreators';
import { accountToInfo, discoverToFavoriteItem } from '../../utils/helpers';
import PageRoutes from '../../utils/routes/Routes';
import ISession from '../../utils/interfaces/TMDB/ISession';
import IDiscoverMovie from '../../utils/interfaces/TMDB/IDiscoverMovie';
import IDiscoverTVShow from '../../utils/interfaces/TMDB/IDiscoverTVShow';

const useAuth = () => {
  const service = TMDBService.getInstance();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serverLogIn = async (userData: ILogin) => {
    try {
      setError('');
      setLoading(true);
      const dataResponse = await service.createSession(userData);
      const { sessionId } = dataResponse as ISession;
      const dataAccount = await service.getAccountDetails(sessionId);
      const { results: movies } = await service.getFavoriteMovies(
        String(dataAccount.id),
        sessionId,
      );
      const { results: tvShows } = await service.getFavoriteTVShows(
        String(dataAccount.id),
        sessionId,
      );
      dispatch(userDeleteAllFavorites());
      dispatch(userAddFavoriteMovieGroup(discoverToFavoriteItem(movies as IDiscoverMovie[])));
      dispatch(userAddFavoriteTvShowGroup(discoverToFavoriteItem(tvShows as IDiscoverTVShow[])));
      dispatch(userLogIn(accountToInfo(dataAccount, sessionId)));
      navigate(PageRoutes.HOME);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, serverLogIn };
};

export default useAuth;
