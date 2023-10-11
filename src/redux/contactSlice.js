import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addNewContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.rejected, handleRejected)
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })

      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.rejected, handleRejected)
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      });
  },
});

export const contactsReducer = contactSlice.reducer;
