import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        query: '',
        activeTab: 'photos', // ✅ fixed
        result: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) { // ✅ fixed spelling
            state.query = action.payload
        },
        setActiveTab(state, action) { // ✅ fixed name
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.loading = false
            state.result = action.payload
        },
        setLoading(state) { // ✅ naming fix
            state.loading = true
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResult(state) {
            state.result = [] // ✅ fix
        }
    }
})

export const {
    setQuery,
    setActiveTab,
    setError,
    setLoading,
    setResults,
    clearResult
} = searchSlice.actions

export default searchSlice.reducer