import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        query: '',
        activetab: 'photos',
        result: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuary(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activetab = action.payload
        },
        setResults(state, action) {
            state.loading = false
            state.result = action.payload
        },
        setloading(state) {
            state.loading = true
            state.error = null
        },

        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResult(state) {
            state.result
        }
    }
})


export const { setQuary, setActiveTabs, setError, setloading, setResults, clearResult } = searchSlice.actions

export default searchSlice.reducer