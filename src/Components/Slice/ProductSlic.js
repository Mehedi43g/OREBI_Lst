import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : 0,
  number : 0
}

export const productSlic = createSlice({
  name: 'product',
  initialState,
  reducers: {
   allproduct : (state,action)=>{
    state.products = action.payload
   }
   
  },
})


export const { allproduct } = productSlic.actions

export default productSlic.reducer