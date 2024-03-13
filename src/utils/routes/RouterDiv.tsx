import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageRoutes from './Routes';
import Home from '../../components/pages/Home/Home';
import Movie from '../../components/pages/Movie/Movie';
import TVShow from '../../components/pages/TVShow/TVShow';
import Season from '../../components/pages/Season/Season';
import Person from '../../components/pages/Person/Person';
import Login from '../../components/pages/Login/Login';
import Profile from '../../components/pages/Profile/Profile';
import Error from '../../components/pages/Error/Error';
import Search from '../../components/pages/Search/Search';
import ProtectedRoute from './ProtectedRoute';
import { State } from '../../state/store';

const RouterDiv = () => {
  const userState = useSelector((state: State) => state.user);
  return (
    <Routes>
      <Route index path={PageRoutes.HOME} element={<Home />} />
      <Route path={PageRoutes.SEARCH} element={<Search />} />
      <Route path={PageRoutes.MOVIE}>
        <Route path=":movieId" element={<Movie />} />
      </Route>
      <Route path={PageRoutes.TV_SHOW}>
        <Route path=":showId" element={<TVShow />} />
      </Route>
      <Route path={`${PageRoutes.TV_SHOW}/:showId${PageRoutes.TV_SEASON}`}>
        <Route path=":seasonId" element={<Season />} />
      </Route>
      <Route path={PageRoutes.PERSON}>
        <Route path=":personId" element={<Person />} />
      </Route>
      <Route
        path={PageRoutes.LOGIN}
        element={(
          <ProtectedRoute path={PageRoutes.HOME} valid={!userState.logged}>
            <Login />
          </ProtectedRoute>
        )}
      />
      <Route
        path={PageRoutes.PROFILE}
        element={(
          <ProtectedRoute path={PageRoutes.HOME} valid={userState.logged}>
            <Profile />
          </ProtectedRoute>
        )}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterDiv;
