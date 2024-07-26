import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISettings } from '@renderer/types/settings.types'
import { getItem } from '@renderer/utils/localStorage.utils'

let initialState: ISettings = {
  apiUrl: '',
}

const retrievedSettings = getItem<ISettings>('settings')

if (retrievedSettings) initialState = { ...initialState, ...retrievedSettings }

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
