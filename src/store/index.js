import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import articleReducer from './articleSlice';
import balloonReducer from './balloonSlice';

const reducers = { articleReducer, balloonReducer };

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger)
});

export default store;
