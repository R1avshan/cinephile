
import { configureStore } from "@reduxjs/toolkit";
import { bannerReducer } from "../features/Banner/bannerSlice";
import { moviesReducer } from "../features/Movies/moviesSlice";
import { serialsReducer } from "../features/Serials/serialsSlice";


const store = configureStore({
    reducer: {
        banner: bannerReducer,
        movies: moviesReducer,
        serials: serialsReducer
    },
    devTools: true
})

export default store