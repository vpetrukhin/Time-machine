import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const testUser = {
    login: 'admin',
    password: 'admin'
}

export interface IState {
    isAuth: boolean;
}

export const initialState: IState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<{ login: string, password: string }>) => {
            const { login, password } = action.payload;
            state.isAuth = login === testUser.login && password === testUser.password;
        }
    }
})

export const { setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;