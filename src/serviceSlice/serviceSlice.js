import { createSlice } from '@reduxjs/toolkit';
import service from '../api/api';

const serviceSlice = createSlice({
  name: 'result',
  initialState: service,
  reducers: {
    updateService: (state, { payload }) => {
      const { code, increment } = payload;

      for (const category in state) {
        const services = state[category];
        const serviceIndex = services.findIndex(service => service.code === code);

        if (serviceIndex !== -1) {
          const updatedValue = services[serviceIndex].value + (increment ? 1 : -1);

          if (updatedValue >= 0) {
            services[serviceIndex] = { ...services[serviceIndex], value: updatedValue };
            break;
          }
        }
      }
    },
    resetService: (state, { payload }) => {
      const { code } = payload;

      for (const category in state) {
        const services = state[category];
        const serviceIndex = services.findIndex(service => service.code === code);

        if (serviceIndex !== -1) {
          services[serviceIndex] = { ...services[serviceIndex], value: 0 };
          break;
        }
      }
    },
  },
});

export const { updateService, resetService } = serviceSlice.actions;
export default serviceSlice.reducer;
