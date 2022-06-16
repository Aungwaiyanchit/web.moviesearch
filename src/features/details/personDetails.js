import { createSlice } from "@reduxjs/toolkit";


import { getPersonDetails } from '../../services/api'


const initialState = {
    loading: false,
    hasError: false,
    results: [],
}


export const PersonDetailSlice = createSlice({
    name: 'personDeatils',
    initialState,
    reducers: {
        getDetails: state => {
            state.loading = true
        },
        getDetailsSuccess: (state, { payload }) => {
            state.results = payload
            state.loading = false
            state.hasError = false
        },
        getDetailsFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

export const  {getDetails, getDetailsSuccess, getDetailsFailure}  = PersonDetailSlice.actions
export default PersonDetailSlice.reducer


export const fetchPersonDetails = (query) => {
    return async dispatch => {
        dispatch(getDetails())
        try {
           const response = await getPersonDetails(`person/${query}`) 
           dispatch(getDetailsSuccess(response))
        } catch (error) {
            dispatch(getDetailsFailure(error))
        }
    }
} 