import { Action } from 'redux';
import { Epic } from 'redux-observable';

export type EpicType = Epic<Action<string>, Action<string>>;
