import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/slice'
import settingsReducer from './settings/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
