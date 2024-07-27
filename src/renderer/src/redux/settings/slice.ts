import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISettings } from '@renderer/types/settings.types'
import { getItem } from '@renderer/utils/localStorage.utils'

let initialState: ISettings = {
  API_URL: '',
  THEME: 'light',
}

const retrievedSettings = getItem<ISettings>('settings')

if (retrievedSettings) initialState = { ...initialState, ...retrievedSettings }

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeSettings: (state, { payload }: PayloadAction<ISettings>) => {
      return { ...state, ...payload }
    },
  },
})

export const { changeSettings } = settings.actions

export default settings.reducer
