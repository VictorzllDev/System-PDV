import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISettings } from '@renderer/interfaces/ISettings'

const initialState: ISettings = {
  apiUrl: '',
}

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeApiUrl: (state, { payload }: PayloadAction<string>) => {
      state.apiUrl = payload
    },
  },
})

export const { changeApiUrl } = settings.actions

export default settings.reducer
