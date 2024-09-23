// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial auth state
const authInitialState = {
  isAuthenticated: false,
  user: null
};

// Thunk for login
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('/api/login', credentials); // Replace with actual API
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
