import { configureStore } from "@reduxjs/toolkit";

import loadingSlice from './slices/loadingSlice';
import messageSlice from './slices/messsageSlice';
import boardDataSlice from './slices/boardDataSlice';

export const store = configureStore({
    reducer: {
        loading:loadingSlice,
        message:messageSlice,
        // boardData:boardDataSlice,
    }   
})