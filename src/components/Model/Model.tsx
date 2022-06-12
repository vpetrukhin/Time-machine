import {ModelProps} from "./Model.props";
import {removeModel, setModelKeyValue} from "../../store/slices/form";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {ChangeEvent} from "react";
import {Parametr} from "../Parametr/Parametr";

export const Model = ({ index }: ModelProps) => {
    const model = useSelector((state: RootState) => state.form.models[index])
    const { name, equation, paramList } = model;
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as 'name' | 'equation';
        dispatch(setModelKeyValue({modelIndex: index, key, value: e.target.value}))
    }

    const handleDeleteFunc = () => {
      dispatch(removeModel(index));
    }

    return (
        <Box sx={{
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            <Typography variant='h5' color='#fff'>Канал {index + 1}</Typography>
            <TextField value={name} variant='outlined' fullWidth label='Название канала' name='name' onChange={handleChange} />
            <TextField value={equation} variant='outlined' fullWidth label='Функция' name='equation' placeholder='Введите функцию' onChange={handleChange} />
            <Typography variant='h6' color='#fff'>Параметры:</Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}>
                {paramList && paramList.length > 0 && paramList.map((parametr, parametrIndex) => (
                    <Parametr key={parametr.name} modelIndex={index} index={parametrIndex} />
                ))}
            </Box>

            <Button variant='contained' color='error' onClick={handleDeleteFunc}>Удалить</Button>
        </Box>
    );
};