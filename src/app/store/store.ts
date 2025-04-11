import { configureStore } from '@reduxjs/toolkit';
import { RequestsReducer } from '@/entities/request';

export const store = configureStore({
  reducer: {
    requests: RequestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
