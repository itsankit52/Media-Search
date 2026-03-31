import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/SearchSlice'
import collectionReducer from './features/CollectionSlice'
export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer
    }
})