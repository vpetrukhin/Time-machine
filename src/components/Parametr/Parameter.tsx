import {ParametrProps} from "./Parametr.props";
import {Box, TextField, Typography} from "@mui/material";
import {ChangeEvent} from "react";
import {IParameter} from "../../types/model.types";

export const Parameter = ({ index }: ParametrProps) => {
    const parameter={title:"",name:"",type:""};
    const { title, name, type } = parameter;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as keyof IParameter;
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