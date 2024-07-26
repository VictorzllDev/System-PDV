import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@renderer/types/user.types'

const initialState: IUser[] = []

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (_, { payload }: PayloadAction<IUser>) => {
      return [payload]
    },
    logoutAction: () => [],
  },
})

export const { loginAction, logoutAction } = userSlice.actions

export default userSlice.reducer
