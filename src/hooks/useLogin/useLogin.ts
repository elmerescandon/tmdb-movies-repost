import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TMDBService from '../../services/TMDB/TMDB.service';
import PageRoutes from '../../utils/routes/Routes';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const service = TMDBService.getInstance();
  const navigate = useNavigate();

  const requestToken = async () => {
    try {
      setLoading(true);
      const dataRequest = await service.getRequestToken();
      navigate({
        pathname: PageRoutes.LOGIN,
        search: `?request_token=${dataRequest.requestToken}`,
      });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, requestToken };
};
export default useLogin;
