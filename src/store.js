import { configureStore } from "@reduxjs/toolkit";
import promptSlice from './slices/promptSlice';
import loadingSlice from './slices/loadingSlice';

export const store = configureStore({
    reducer: {
        loading:loadingSlice
    }
})