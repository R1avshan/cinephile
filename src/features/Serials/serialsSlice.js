import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadSerials = createAsyncThunk(
    '@@movies/loadSerials',
    async (_, { dispatch }) => {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=9976e0dfa6f1817cd89602c8ff3fd6d7&language=ru-RU&page=1`)

        const { data } = res
        dispatch(addSerials(data))

    }
)

const initialState = {
    list: []
}

const serialsSlice = createSlice({
    name: '@@serials',
    initialState,
    reducers: {
        addSerials: (state, action) => {
            state.list = action.payload
        }
    }
})

const { addSerials } = serialsSlice.actions

export const serialsReducer = serialsSlice.reducer 