import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    removeContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     state.push(payload);
//   },
//   [removeContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// export default contactsReducer;
