/* eslint-disable @typescript-eslint/comma-dangle */
import { useSearchParams } from 'react-router-dom';

const useQueryParams = <T,>(
  callbackParams: (
    params: T,
    currentSearchParams: URLSearchParams,
  ) => URLSearchParams
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateParams = (params: T) => {
    const newSearchParams = callbackParams(params, searchParams);
    setSearchParams(newSearchParams);
  };

  return { searchParams, updateParams };
};

export default useQueryParams;
