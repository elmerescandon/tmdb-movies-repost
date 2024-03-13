import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MenuGeneric from '../../organisms/MenuGeneric/MenuGeneric';
import Header from '../../organisms/Header/Header';
import DetailSimilarMovies from '../../templates/DetailSimilarMovies/DetailSimilarMovies';
import DetailSimilarTVShows from '../../templates/DetailSimilarTVShows/DetailSimilarTVShows';
import { State } from '../../../state/store';
import IUserInfo from '../../../state/state-interfaces/User/IUserInfo';
import './Profile.scss';

const Profile = () => {
  const userState = useSelector((state: State) => state.user);
  const { name, userName } = userState.userInfo as IUserInfo;
  return (
    <div className="profile">
      <Header />
      <Container>
        <Box className="profile--info">
          <MenuGeneric />
          <Typography gutterBottom variant="h2" sx={{ textDecoration: 'underline' }}>Profile</Typography>
          <Typography gutterBottom variant="h3">{`Hi, ${name}!`}</Typography>
          <Typography gutterBottom variant="h5">
            {`Username: ${userName}`}
          </Typography>
        </Box>
        <Box className="profile--favorites">
          <Typography variant="h3" align="center" sx={{ fontStyle: 'oblique' }}>Your favorites</Typography>
          <DetailSimilarMovies
            similar={userState.favorites.movies}
            titleContainer="Movies"
          />
          <DetailSimilarTVShows
            similar={userState.favorites.tvShows}
            titleContainer="TV Shows"
          />
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
