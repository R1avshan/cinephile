import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadMovies = createAsyncThunk(
    '@@movies/loadMovies',
    async (_, { dispatch }) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9976e0dfa6f1817cd89602c8ff3fd6d7&language=ru-RU&page=1`)

        const { data } = res
        dispatch(addMovies(data))

    }
)

const initialState = {
    list: []
}

const movieSlice = createSlice({
    name: '@@movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.list = action.payload
        }
    }
})

const { addMovies } = movieSlice.actions

export const moviesReducer = movieSlice.reducer 