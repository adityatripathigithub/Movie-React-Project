import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personSlice from "./reducers/personSlice";

export const store = configureStore({
    reducer: {
        person: personSlice,
        movie: movieReducer,
        tv: tvReducer,
    },
});
