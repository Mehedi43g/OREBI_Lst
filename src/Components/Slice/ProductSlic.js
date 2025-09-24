import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem : [],
}
// fixed
export const productSlic = createSlice({
  name: 'product',
  initialState,
  reducers:{
     addToCart:( state,action)=>{
    let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
    
    if(findProduct != -1){
      state.cartItem[findProduct].qun++;
      
    }else{
      state.cartItem = [ ...state.cartItem, action.payload];
    }
   }
  }
})


export const { addToCart } = productSlic.actions

export default productSlic.reducer