import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type ReposState from './types/ReposState';
import * as api from './api';

const initialState: ReposState = {
    repos: [],
    userName: 'NesterovAlexsey',
    error: undefined
  };

  export const loadRepos = createAsyncThunk(
    'repos/loadRepos',
    () => api.getAllRepository('NesterovAlexsey')
  );

  const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
      resetError: (state) => {
        state.error = undefined;
      }
    },

    extraReducers: (builder) => {
      builder
        .addCase(loadRepos.fulfilled, (state, action) => {
          state.repos = action.payload;
        })
        .addCase(loadRepos.rejected, (state) => {
          state.error = 'Error: repo fetch rejected';
        });
    }
  });

  export const { resetError } = reposSlice.actions;
  export default reposSlice.reducer;
