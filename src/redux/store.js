import { configureStore } from '@reduxjs/toolkit';

import contactsReducers from './contactsSlise';
import filterReducers from './filterSlise';

const store = configureStore({
  reducer: { contacts: contactsReducers, filter: filterReducers },
});

export default store;
