import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ProductSlic = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
     console.log(action.payload);
     
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = ProductSlic.actions

export default ProductSlic.reducer