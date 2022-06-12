import {ParametrProps} from "./Parametr.props";
import {Box, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {ChangeEvent} from "react";
import {setParamKeyValue} from "../../store/slices/form";
import {IParametr} from "../../types/model.types";

export const Parametr = ({ index, modelIndex }: ParametrProps) => {
    const parametr = useSelector((state: RootState) => state.form.models[modelIndex].paramList[index]);
    const { title, name, type } = parametr;
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as keyof IParametr;
        dispatch(setParamKeyValue({modelIndex, paramIndex: index, key, value: e.target.value}))
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        }}>
            <Typography variant='subtitle1' color='#fff'>{name}</Typography>
            <TextField value={title} variant='outlined' label='Название параметра' name='title' onChange={handleChange} />
            <TextField value={type} variant='outlined' name='type' label='Тип параметра' onChange={handleChange} />
        </Box>
    );
};