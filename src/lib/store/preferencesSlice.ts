import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface PreferencesState {
  sortBy: string
  category: string
}

const initialState: PreferencesState = {
  sortBy: "",
  category: "",
}

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  },
})

export const { setSortBy, setCategory } = preferencesSlice.actions
export default preferencesSlice.reducer

