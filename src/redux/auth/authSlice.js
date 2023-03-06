import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, currentUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },

    [register.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoading = false;
	  },
	 
    [register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
	  },
	 
    [logIn.pending](state) {
      state.isLoading = true;
	  },
	 
    [logIn.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoading = false;
	  },
	 
    [logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
	  },
	 
    [logOut.pending](state) {
      state.isLoading = true;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
	  },
	 
    [currentUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },

    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
	  },
	 
    [currentUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
