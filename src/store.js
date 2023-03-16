import { configureStore } from "@reduxjs/toolkit";
import messageSlice from './slices/messsageSlice';
import loadingSlice from './slices/loadingSlice';
import statusBarSlice from './slices/statusBar';

export const store = configureStore({
    reducer: {
        loading:loadingSlice,
        message:messageSlice,
        statusBar: statusBarSlice
    }
})