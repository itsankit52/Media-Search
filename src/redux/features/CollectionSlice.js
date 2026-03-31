import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState: initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            )

            if (!alreadyExist) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },


        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
            localStorage.setItem('collection', JSON.stringify(state.items))


        },


        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addtoast: () => {
            toast('Added to Collection✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removetoast: () => {
            toast.error('Removed From Collection❎', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const {
    addCollection, removeCollection, clearCollection, addtoast, removetoast
} = collectionSlice.actions

export default collectionSlice.reducer