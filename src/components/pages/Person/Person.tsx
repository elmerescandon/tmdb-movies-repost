import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch/useFetch';
import Header from '../../organisms/Header/Header';
import Loader from '../../molecules/Loader/Loader';
import DetailPerson from '../../templates/DetailPerson/DetailPerson';
import TMDBService from '../../../services/TMDB/TMDB.service';
import IPerson from '../../../utils/interfaces/TMDB/IPerson';
import './Person.scss';

const Person = () => {
  const dataService = TMDBService.getInstance();
  const { personId } = useParams();
  const { data, loading, error } = useFetch<IPerson, string | undefined>(
    dataService.getPerson,
    personId,
  );
  return (
    <div className="person">
      <Header />
      {loading ? <Loader size={80} /> : null}
      {!loading && data !== undefined ? <DetailPerson person={data} /> : null}
      {error !== '' ? <Typography>{error}</Typography> : null}
    </div>
  );
};

export default Person;
