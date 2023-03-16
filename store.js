import { configureStore } from "@reduxjs/toolkit";

import loadingSlice from './slices/loadingSlice';
import messageSlice from './slices/messsageSlice';

export const store = configureStore({
    reducer: {
        loading:loadingSlice,
        message:messageSlice
    }
})