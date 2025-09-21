import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price : '$20',
  Number : 0
}

export const productSlic = createSlice({
  name: 'product',
  initialState,
  reducers: {
   allproduct : (state)=>{

   }
   
  },
})


export const { allproduct } = productSlic.actions

export default productSlic.reducer