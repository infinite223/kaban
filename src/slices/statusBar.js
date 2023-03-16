import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusBar: 'white'
}

export const statusBarSlice = createSlice({
    name: 'statusBar',
    initialState,
    reducers: {
        setStatusBar: (state, action) => {
            state.statusBar = action.payload
        }
    }
})

export const { setStatusBar } = statusBarSlice.actions
export const selectStatusBar = (state) => state.statusBar.statusBar

export default statusBarSlice.reducer;