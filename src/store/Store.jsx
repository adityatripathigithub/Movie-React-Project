import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redusers/movieSlice"
import tvReducer from "./redusers/tvSlice"
import personReducer from "./redusers/personSlice"

export const store = configureStore({
    reducer: {
        movie:movieReducer,
        tv: tvReducer,
        person: personReducer,
    },
});
