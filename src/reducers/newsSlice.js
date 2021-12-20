import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  feeds: undefined
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setFeeds: (state, action) => {
      state.feeds = action.payload
    }
  }
})

export const { setFeeds } = newsSlice.actions

export const newsStates = state => state.news

export default newsSlice.reducer
