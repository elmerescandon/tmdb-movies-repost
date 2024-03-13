import {
  Box, Button, Container, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

import FormText from '../../atoms/Forms/FormText/FormText';

import PageRoutes from '../../../utils/routes/Routes';
import { errorMessageLogin, initialLogin } from '../../../utils/constants';
import ILogin from '../../../utils/interfaces/ILogin';
import './Login.scss';

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState<ILogin>(initialLogin);
  const { error, serverLogIn } = useAuth();

  const handleValidation = (text: string): boolean => {
    const alphanumericRegex = /^[a-zA-Z0-9\s.*/]+$/;
    return alphanumericRegex.test(text);
  };

  const handleUsernameLogin = (text: string) => {
    setUserLoginData({ ...userLoginData, userName: text });
  };
  const handlePasswordLogin = (text: string) => {
    setUserLoginData({ ...userLoginData, password: text });
  };

  const handleLogIn = () => {
    serverLogIn(userLoginData);
  };

  useEffect(() => {
    if (searchParams.has('denied')) navigate(PageRoutes.HOME);
    if (searchParams.has('request_token')) {
      setUserLoginData({
        ...userLoginData,
        id: searchParams.get('request_token') as string,
      });
    } else {
      navigate(PageRoutes.HOME);
    }
  }, []);

  return (
    <div className="login">
      <Container>
        <Typography variant="h2" gutterBottom>
          Filmoteca
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ paddingBottom: 5 }}>
          Where you can find information about your favorite tv shows, movie,
          and so more...
        </Typography>
        <Box className="login--forms">
          <FormText
            label=""
            maxLengthText={40}
            type="text"
            onChange={handleUsernameLogin}
            errorMessage={`Invalid username, ${errorMessageLogin}`}
            validationFunction={handleValidation}
            placeholder="Username"
          />
          <FormText
            label=""
            maxLengthText={40}
            type="password"
            onChange={handlePasswordLogin}
            errorMessage={`Invalid password , ${errorMessageLogin}`}
            validationFunction={handleValidation}
            placeholder="Password"

          />
          <Button onClick={handleLogIn} size="large" variant="outlined" sx={{ width: 100 }}>
            Log In
          </Button>
          {error !== '' ? <Typography>{error}</Typography> : null}
        </Box>
      </Container>
    </div>
  );
};

export default Login;
