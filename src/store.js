import { configureStore } from "@reduxjs/toolkit";
import personDetailsReducer from "./features/details/personDetails";
import searchReducer from './features/search/searchSlice'
import moviesReducer from './features/movies/movieSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        personDetails: personDetailsReducer,
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
})