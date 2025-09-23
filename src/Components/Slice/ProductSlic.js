import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem : [],
}

export const productSlic = createSlice({
  name: 'product',
  initialState,
  reducers:{
     addToCart:( state,action)=>{
    let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
    
    if(findProduct !== -1){
      state.cartItem[findProduct].qun += 1;
    }else{
      state.cartItem = [{ ...action.payload, qun: 1}];
    }
   }
  }
})


export const { addToCart } = productSlic.actions

export default productSlic.reducer