import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISigninResponce} from "../../types/auth.types";

export interface IUserInfo {
    username: string,
    surname: string,
    name: string,
    authorities: [
        {
            authority: string,
        }
    ],
}

export interface IState {
    isAuth: boolean;
    userInfo: IUserInfo | null;
}

export const initialState: IState = {
    isAuth: false,
    userInfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<ISigninResponce>) => {
            const { username, surname, authorities, name, token } = action.payload;

            state.userInfo = { username, surname, authorities, name };
            if (token) state.isAuth = true;
        },
        checkAuth: (state) => {
            const token = localStorage.getItem('jwt');
            state.isAuth = Boolean(token);
        }
    }
})

export const { setIsAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;