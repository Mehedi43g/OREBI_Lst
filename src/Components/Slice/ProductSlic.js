import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}
// fixed
export const productSlic = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item) => item.id == action.payload.id)

      if (findProduct != -1) {
        state.cartItem[findProduct].qun++;

      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
    },

    removeCart: (state, action) => {
      // state.cartItem = action.payload;
      let filtercart = state.cartItem.filter((item) => item.id != action.payload.id)
      state.cartItem = filtercart;
    },

    //  addQuntt:(state,action)=>{
    //   let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
    //   if(findProduct !== -1){
    //     state.cartItem[findProduct].qun +=1;

    //   }
    //  },

    deleteQuntt: (state, action) => {
      let findProduct = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (findProduct !== -1) {
        if (state.cartItem[findProduct].qun > 1) {
          state.cartItem[findProduct].qun -= 1;
        } else {
          state.cartItem.splice(findProduct, 1);
        }
      }
    },
    
  }
})


export const { addToCart, removeCart, addQuntt, deleteQuntt, quntPricePls } = productSlic.actions

export default productSlic.reducer