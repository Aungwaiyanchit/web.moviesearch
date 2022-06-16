import { configureStore } from "@reduxjs/toolkit";
import personDetailsReducer from "./features/details/personDetails";
import searchReducer from './features/search/searchSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        personDetails: personDetailsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
})