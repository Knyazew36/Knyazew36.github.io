import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState: [],
  reducers: {
    addBasket: (state, { payload }) => {
      const { code } = payload;
      const existingItem = state.find((item) => item.code === code);

      if (existingItem) {
        existingItem.value++;
      } else {
        state.push(payload);
      }
    },

    removeBasket: (state, { payload }) => {
      const { code } = payload;
      const existingItemIndex = state.findIndex((item) => item.code === code);

      if (existingItemIndex !== -1) {
        if (state[existingItemIndex].value === 1) {
          state.splice(existingItemIndex, 1);
        } else {
          state[existingItemIndex].value--;
        }
      }
    },

    clearBasket: (state, { payload }) => {
      const { code } = payload;
      const existingItemIndex = state.findIndex((item) => item.code === code);

      if (existingItemIndex !== -1) {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addBasket, removeBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
