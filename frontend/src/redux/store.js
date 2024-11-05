import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './ProductSlice'
import { CategorySlice } from './CategorySlice'

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    categorys: CategorySlice.reducer
  },
})