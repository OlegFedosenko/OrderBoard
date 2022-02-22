type ErrorCodes = { [key: string]: string };

const DEFAULT_ERROR_KEY = 'something_went_wrong';
const ERROR_CODES: ErrorCodes = {
  SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
};
type ErrorData = {
  code?: string | undefined;
};
export const getErrorText = (error: ErrorData) => {
  const { code } = error;
  return code ? ERROR_CODES[code] || DEFAULT_ERROR_KEY : DEFAULT_ERROR_KEY;
};
