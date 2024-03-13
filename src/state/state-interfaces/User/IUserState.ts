import IUserFavorites from './IUserFavorites';
import IUserInfo from './IUserInfo';

interface IUserState {
  logged: boolean;
  userInfo: IUserInfo | null;
  favorites: IUserFavorites;
}

export default IUserState;
