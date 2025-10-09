import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem:(state,action) =>{
      state.items.filter((item)=>(action.payload.id == item.card?.info?.id ? item.quantity = action.payload.quantity : false))
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0; // this is clear the items
    },
  },
});

export const { addItem, removeItem, clearItem ,updateItem} = cartSlice.actions;
export default cartSlice.reducer;
