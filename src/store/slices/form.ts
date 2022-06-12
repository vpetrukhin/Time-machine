import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModel, IParametr} from "../../types/model.types";

export interface IFuncObj {
    id: string;
    value: string;
}

export interface IState {
    models: Array<IModel>
}

const initialParamObj = {
    name: '',
    title: '',
    type: '',
}

const initialModelObj = {
    name: '',
    equation: '',
    paramList: [initialParamObj]
}

const initialState: IState = {
    models: [
        initialModelObj
    ]
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addModel: (state) => {
            state.models.push(initialModelObj)
        },
        addParam: (state, action: PayloadAction<number>) => {
            state.models[action.payload].paramList.push(initialParamObj);
        },
        removeModel: (state, action: PayloadAction<number>) => {
            state.models = state.models.filter((_, index) => index !== action.payload);
        },
        removeParam: (state, action: PayloadAction<{ modelIndex: number, paramName: string }>) => {
            const { modelIndex, paramName } = action.payload;
            state.models[modelIndex].paramList = state.models[modelIndex].paramList.filter(param => param.name !== paramName);
        },
        //TODO: заменить index на id
        setModelKeyValue: (state, action: PayloadAction<{ modelIndex: number, key: 'name' | 'equation'; value: string }>) => {
            const { modelIndex, key, value } = action.payload;
            console.log(modelIndex, key, value);
            state.models[modelIndex][key] = value;
        },
        setParamKeyValue: (state, action: PayloadAction<{ modelIndex: number, paramIndex: number, key: keyof IParametr, value: string }>) => {
            const { modelIndex, paramIndex, key, value } = action.payload;
            state.models[modelIndex].paramList[paramIndex] = { ...state.models[modelIndex].paramList[paramIndex], [key]: value };
        }
    }
})

export const formReducer = formSlice.reducer;
export const { addModel, setModelKeyValue, removeModel, setParamKeyValue } = formSlice.actions;