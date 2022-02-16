import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();
const middlewares = [thunk, epicMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});
epicMiddleware.run(epics);

export { store };
