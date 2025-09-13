import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const ProductSlic = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((Item) => Item.id == action.payload.id)
      
      if (findProduct !== -1) {
        state.cartItem[findProduct].qun +=1;
      } else {
        console.log("ami same");
        state.cartItem = [{...action.payload, qun:1}];

      }

    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = ProductSlic.actions;

export default ProductSlic.reducer


