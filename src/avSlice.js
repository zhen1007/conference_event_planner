import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "./assets/projector.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "./assets/speakers.webp",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "./assets/microphone.webp",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "./assets/whiteboard.jpg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "./assets/signs.webp",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
