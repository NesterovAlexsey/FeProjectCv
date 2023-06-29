import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import InfoState from './types/InfoState';

const initialState: InfoState = {
    infos: {
 id: 1234, name: 'test', location: 'nowhere', avatar_url: 'link here'
},
  };

  export const loadInfos = createAsyncThunk(
    'infos/loadInfos',
    () => api.default()
  );

  const infoSlice = createSlice({
    name: 'infos',
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
          }
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadInfos.fulfilled, (state, action) => {
          state.infos = action.payload;
        })
        .addCase(loadInfos.rejected, (state) => {
          state.error = 'Error: info fetch rejected';
        });
    }
  });

  export const { resetError } = infoSlice.actions;
  export default infoSlice.reducer;
