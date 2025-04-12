import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RequestType } from './types';
import { getLocaleStorage, setLocaleStorage } from '@/shared/lib/utils';

export interface RequestsState {
  requests: RequestType[];
}

const initialState: RequestsState = {
  requests: getLocaleStorage<RequestType>('REQUESTS_AZH'),
};

export const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<RequestType>) => {
      state.requests.push(action.payload);
      setLocaleStorage('REQUESTS_AZH', state.requests);
    },
    updateRequest: (state, action: PayloadAction<RequestType>) => {
      state.requests = state.requests.map((request) =>
        request.id === action.payload.id ? { ...request, ...action.payload } : request,
      );
      setLocaleStorage('REQUESTS_AZH', state.requests);
    },
    deleteRequest: (state, action: PayloadAction<number>) => {
      state.requests = state.requests.filter((request) => request.id !== action.payload);
      setLocaleStorage('REQUESTS_AZH', state.requests);
    },
  },
});

export const { addRequest, updateRequest, deleteRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
