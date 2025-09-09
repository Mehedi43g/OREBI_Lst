import { configureStore } from '@reduxjs/toolkit'
import  ProductSlic  from './Components/Slice/ProductSlic'

export const store = configureStore({
  reducer: {
    product: ProductSlic,
  },
})