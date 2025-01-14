import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../features/company/slices/companySlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
