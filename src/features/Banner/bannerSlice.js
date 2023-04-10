import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadBannerInfo = createAsyncThunk(
    '@@banner/loadBanner',
    async (_, { dispatch }) => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=9976e0dfa6f1817cd89602c8ff3fd6d7&language=ru-RU&page=1`)
        let { data } = res
        dispatch(addBannerMovie(data.results))

    }
)


const initialState = {
    loading: true,
    list: [],
    error: null
}

const bannerSlice = createSlice({
    name: '@@banner',
    initialState,
    reducers: {
        addBannerMovie: (state, action) => {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBannerInfo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loadBannerInfo.rejected, (state) => {
                state.loading = false
                state.error = 'Возникла проблема при получении данных'
            })
            .addCase(loadBannerInfo.fulfilled, (state) => {
                state.loading = false
            })
    }
})

const { addBannerMovie } = bannerSlice.actions


export const bannerReducer = bannerSlice.reducer


