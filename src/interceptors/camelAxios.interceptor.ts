import axios from 'axios';
import camelCaseKeys from 'camelcase-keys';

const camelAxios = axios.create();

camelAxios.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  }),
  (error) => Promise.reject(error),
);

export default camelAxios;
