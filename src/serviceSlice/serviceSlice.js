import { createSlice } from '@reduxjs/toolkit';
import service from '../api/api';
const initialState = service;

const serviceSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    updateService: (state, { payload }) => {
      const { code, increment } = payload;

      for (const category in state) {
        const services = state[category];
        const serviceIndex = services.findIndex(
          (service) => service.code === code
        );

        if (serviceIndex !== -1) {
          const service = services[serviceIndex];
          const updatedValue = service.value + (increment ? 1 : -1);

          if (updatedValue >= 0) {
            services[serviceIndex] = { ...service, value: updatedValue };
          }

          break;
        }
      }
    },
    resetService: (state, { payload }) => {
      const { code } = payload;
      for (const category in state) {
        const services = state[category];
        const serviceIndex = services.findIndex(
          (service) => service.code === code
        );

        if (serviceIndex !== -1) {
          const service = services[serviceIndex];
          const updatedValue = 0;

          services[serviceIndex] = { ...service, value: updatedValue };

          break;
        }
      }
    },
  },
});

export const { updateService, resetService } = serviceSlice.actions;
export default serviceSlice.reducer;
