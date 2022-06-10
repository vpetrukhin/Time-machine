import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth";
import {formReducer} from "./slices/form";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        form: formReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;