import { configureStore } from '@reduxjs/toolkit';

import serviceSlice from '../serviceSlice/serviceSlice';
import basketSlice from '../basketSlice/basketSlice';

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    basket: basketSlice,
  },
});
