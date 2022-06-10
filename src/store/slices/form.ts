import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFuncObj {
    id: string;
    value: string;
}

export interface IState {
    functions: Array<IFuncObj>
}

const initialState: IState = {
    functions: [
        {
            id: String(Math.random() * 10000000),
            value: ''
        }
    ]
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFunction: (state) => {
            state.functions.push({
                id: String(Math.random() * 10000000),
                value: ''
            })
        },
        removeFunction: (state, action: PayloadAction<string>) => {
            state.functions = state.functions.filter(func => func.id !== action.payload);
        },
        setFunctionValue: (state, action: PayloadAction<{ id: string; value: string }>) => {
            const { id, value } = action.payload;
            const currentFuncIndex: number = state.functions.findIndex(func => func.id === id);
            state.functions[currentFuncIndex] = { ...state.functions[currentFuncIndex], value }
        }
    }
})

export const formReducer = formSlice.reducer;
export const { addFunction, setFunctionValue, removeFunction } = formSlice.actions;