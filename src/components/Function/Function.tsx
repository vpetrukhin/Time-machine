import {FunctionProps} from "./Function.props";
import {removeFunction, setFunctionValue} from "../../store/slices/form";
import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";

export const Function = ({ id, value, index }: FunctionProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDeleteFunc = () => {
      dispatch(removeFunction(id));
    }

    return (
        <Box sx={{
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
        }}>
            <TextField key={id} value={value} variant='outlined' fullWidth label={`Функция ${index + 1}`} placeholder='Введите функцию' onChange={(e) => {
                dispatch(setFunctionValue({id, value: e.target.value}))
            }} />
            <Button variant='contained' color='error' onClick={handleDeleteFunc}>Удалить</Button>
        </Box>
    );
};