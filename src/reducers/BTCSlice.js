import { createSlice } from '@reduxjs/toolkit'
import { timeRange } from '../constants'

const initialState = {
  currentPrice: undefined,
  isLoading: false,
  priceHistory: undefined,
  currentTimeRange: timeRange.month
}

export const BTCSlice = createSlice({
  name: 'BTC',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    },
    setPriceHistory: (state, action) => {
      state.priceHistory = action.payload
    },
    setTimeRange: (state, action) => {
      state.currentTimeRange = action.payload
    }
  }
})

export const { setIsLoading, setCurrentPrice, setPriceHistory, setTimeRange } = BTCSlice.actions

export const BCHStates = state => state.BTC

export default BTCSlice.reducer
