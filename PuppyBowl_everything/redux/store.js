import {configureStore} from "@reduxjs/toolkit";
//import api
import { apiSlice } from "../redux/api";
export default configureStore ({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})