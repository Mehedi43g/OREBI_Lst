import { configureStore } from '@reduxjs/toolkit'
import  productSlic  from './Components/Slice/ProductSlic'

export const store = configureStore({
  reducer: {
    product : productSlic,
  },
})