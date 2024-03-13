import { useEffect, useState } from 'react';

const useFetch = <T, U>(
  fetchCallback: (params: U) => Promise<T>,
  params: U,
): { data: T | undefined; loading: boolean; error: string } => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setError('');
      setLoading(true);
      try {
        const newData = await fetchCallback(params);
        setData(newData);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { data, loading, error };
};

export default useFetch;
