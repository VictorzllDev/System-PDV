import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User } from '@renderer/interfaces/user.interface'

const initialState: User[] = []

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionLogin: (_, { payload }: PayloadAction<User>) => {
      return [payload]
    },
    actionLogout: () => [],
  },
})

export const { actionLogin, actionLogout } = userSlice.actions

export default userSlice.reducer
