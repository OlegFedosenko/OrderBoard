import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useAsyncRequest = (action: Function) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const makeRequest = useCallback(
    async (data?: any) => {
      try {
        setError('');
        setLoading(true);
        const response = await dispatch(action(data));
        return response;
      } catch (errorData) {
        setError('errorData');
        throw errorData;
      } finally {
        setLoading(false);
      }
    },
    [action],
  );

  return { makeRequest, loading, error };
};
