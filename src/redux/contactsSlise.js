import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const contactSlise = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  },
});

export const { addContact, removeContact } = contactSlise.actions;
export default contactSlise.reducer;
