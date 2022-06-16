import { createSlice } from "@reduxjs/toolkit/";
import { getResutls } from "../../services/api";

const initialState = {
    loading: false,
    hasError: false,
    results: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearch: state => {
            state.loading = true
        },
        getSearchSuccess: (state, {payload}) => {
            state.results = payload
            state.loading = false
            state.hasError = false
        },
        getSearchFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

export const { getSearch, getSearchFailure, getSearchSuccess } = searchSlice.actions
export default searchSlice.reducer


export const SearchQuery = (query) => {
    console.log(query);
    return async dispatch => {
        dispatch(getSearch())
        try {
            const peopleResult = await getResutls(`search/person`,`&query=${query}`)
            const tvResult = await getResutls(`search/tv`,`&query=${query}`)
            const movieResult = await getResutls(`search/movie`,`&query=${query}`)
            dispatch(getSearchSuccess({peopleResult, tvResult, movieResult}))
        } catch (error) {
            dispatch(getSearchFailure())
        }
    }
}