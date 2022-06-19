import { createSlice } from "@reduxjs/toolkit";
import { getPopular } from "../../services/api";

const initialState = {
    isLoading: false,
    hasError: false,
    movies: []
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: state => {
            state.isLoading = true
        },
        getMoviesSuccess: (state, { payload }) => {
            state.movies = payload
            state.isLoading = false
            state.hasError = false
        },
        getMoviesFailur: state => {
            state.hasError = true
        }
    }
})

export const { getMovies, getMoviesSuccess, getMoviesFailur } = movieSlice.actions

export default movieSlice.reducer

export const getMoviesByOptions = (options) => {
    return async dispatch => {
        dispatch(getMovies());
        try {
            const response = await  getPopular(options)
            dispatch(getMoviesSuccess(response))
        } catch (error) {
            dispatch(getMoviesFailur(error))
        }
    }
}