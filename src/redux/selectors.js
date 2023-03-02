import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts;
export const selectFilter = state => state.filter.value;

export const getFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [selectContacts, selectFilter],
  // Функція перетворювач
  (contacts, filter) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
