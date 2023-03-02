import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

// Генератори екшенів
export const { addFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
