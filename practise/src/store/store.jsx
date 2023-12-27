import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../components/reducers/UserReducer";
export const store = configureStore({
    reducer: {
        UserReducer: UserReducer,
    },
});