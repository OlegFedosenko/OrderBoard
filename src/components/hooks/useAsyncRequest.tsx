import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getErrorText } from '../../services/errorHandler';

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
      } catch (errorData: any) {
        setError(getErrorText(errorData));
        throw errorData;
      } finally {
        setLoading(false);
      }
    },
    [action, dispatch],
  );

  return { makeRequest, loading, error };
};
