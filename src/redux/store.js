import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducers from './contactsSlise';
import filterReducers from './filterSlise';

const rootReducer = combineReducers({
  contacts: contactsReducers,
  filter: filterReducers,
});

const persisitConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedReduser = persistReducer(persisitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
