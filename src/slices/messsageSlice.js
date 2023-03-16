import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: {   
        show:false,
        text:'nic xd',
        type: '',
        data: {}
    }
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            console.log(action.payload, 'tu')
            state.message = action.payload
        }
    }
})

export const { setMessage } = messageSlice.actions
export const selectMessage = (state) => state.message.message

export default messageSlice.reducer;