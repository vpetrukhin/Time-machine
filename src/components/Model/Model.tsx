import {ModelProps} from "./Model.props";
import {Box, Button, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {Parameter} from "../Parametr/Parameter";
import {IModel} from "../../types/model.types";

export const Model = ({model ,setModel}: ModelProps) => {
    const [name,setName]=useState(model.name);
    const [equation,setEquation] = useState(model.equation);
    const [paramList,setParamList] =useState(model.paramList) ;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as 'name' | 'equation';
        switch (key) {
            case "equation":setEquation(e.target.value);break;
            case "name":setName(e.target.value);break;
        }
    }

    return (
        <Box sx={{
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <Typography variant='h5' color='#fff'>Добавление/изменение уравнения</Typography>
            <TextField value={name} variant='outlined' fullWidth label='Название канала' name='name'
                       onChange={handleChange}/>
            <TextField value={equation} variant='outlined' fullWidth label='Функция' name='equation'
                       placeholder='Введите функцию' onChange={handleChange}/>
            <Typography variant='h6' color='#fff'>Параметры:</Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}>
                {paramList && paramList.length > 0 && paramList.map((parameter, parameterIndex) => (
                    <Parameter key={parameter.name} index={parameterIndex}/>
                ))}
            </Box>
            <Button variant={"contained"} onClick={()=>setModel({id:model.id,name, equation, paramList} as IModel)}>Закрыть</Button>
        </Box>
    );
};