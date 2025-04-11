import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Request } from './types';

export interface RequestsState {
  requests: Request[];
}

const initialState: RequestsState = {
  requests: [],
};

export const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
    },
    updateRequest: (state, action: PayloadAction<Request>) => {
      state.requests = state.requests.map((request) =>
        request.id === action.payload.id ? { ...request, ...action.payload } : request,
      );
    },
    deleteRequest: (state, action: PayloadAction<{ id: number }>) => {
      state.requests = state.requests.filter((request) => request.id !== action.payload.id);
    },
  },
});

export const { addRequest, updateRequest, deleteRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
