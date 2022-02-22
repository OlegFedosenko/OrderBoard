import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});
epicMiddleware.run(epics);

export default store;
