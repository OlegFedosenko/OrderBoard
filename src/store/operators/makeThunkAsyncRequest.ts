import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../types';
import { failureAction, successAction } from '../actionTypes';

const makeThunkAsyncRequest =
  (action: Function, actionType: string) => (data?: any) => (dispatch: ThunkDispatch<RootState, void, Action>) => {
    return action(data)
      .then((responce: any) => {
        dispatch({ type: successAction(actionType), payload: responce, args: data });
        return responce;
      })
      .catch((error: any) => {
        dispatch({ type: failureAction(actionType), error, args: data });
        throw error;
      });
  };

export default makeThunkAsyncRequest;
