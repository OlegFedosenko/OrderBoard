export type Action = 'LOGIN' | 'STOP_SESSION' | 'SIGN_IN_GOOGLE';
type Success = `${Action}/fulfilled`;
type Failure = `${Action}/rejected`;

export const successAction = (action: Action): Success => `${action}/fulfilled`;
export const failureAction = (action: Action): Failure => `${action}/rejected`;

//SESSION
export const LOGIN = 'LOGIN';
export const STOP_SESSION = 'STOP_SESSION';
export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';
