import { configureStore } from '@reduxjs/toolkit'
import BTCReducer from '../reducers/BTCSlice'
import newsReducer from '../reducers/newsSlice'

export const store = configureStore({
  reducer: {
    BTC: BTCReducer,
    news: newsReducer
  }
})
