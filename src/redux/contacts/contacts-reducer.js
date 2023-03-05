import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default contactsReducer;
