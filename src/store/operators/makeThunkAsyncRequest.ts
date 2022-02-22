const makeThunkAsyncRequest =
  (action: (...data: any) => Promise<unknown>) =>
  (...data: any) => {
    return action(...data)
      .then((responce: unknown) => {
        return responce;
      })
      .catch((error: unknown) => {
        throw error;
      });
  };

export default makeThunkAsyncRequest;
