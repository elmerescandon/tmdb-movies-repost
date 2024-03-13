import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import useLogin from '../../../hooks/useLogin/useLogin';
import { State } from '../../../state/store';
import LinkButton from '../../atoms/Links/LinkButton/LinkButton';
import PageRoutes from '../../../utils/routes/Routes';
import ModalLogout from '../ModalLogout/ModalLogout';
import { userLogOut } from '../../../state/action-creators/UserActionCreators';
import './UserBar.scss';
import TMDBService from '../../../services/TMDB/TMDB.service';

const UserBar = () => {
  const service = TMDBService.getInstance();
  const { requestToken } = useLogin();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const userState = useSelector((state: State) => state.user);

  const handleLogoutModal = (response: boolean) => {
    if (response) {
      dispatch(userLogOut());
      if (userState.userInfo !== null) service.logoutSession(userState.userInfo.sessionId);
    }
    setOpen(false);
  };

  const handleLogOut = () => {
    setOpen(true);
  };

  const handleLogIn = () => {
    requestToken();
  };
  return (
    <Box className="user-bar">
      {userState.logged ? (
        <Box className="user-bar__logged">
          <LinkButton path={PageRoutes.PROFILE}>
            <Typography variant="subtitle1">{`Welcome ${userState.userInfo?.name}!`}</Typography>
          </LinkButton>
          <Button size="large" onClick={handleLogOut}>Log Out</Button>
        </Box>
      ) : (
        <Button size="large" onClick={handleLogIn}>Log In</Button>
      )}
      <ModalLogout isOpen={open} handleLogout={handleLogoutModal} />
    </Box>
  );
};

export default UserBar;
