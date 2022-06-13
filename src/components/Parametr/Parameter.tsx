import {ParametrProps} from "./Parametr.props";
import {Box, TextField, Typography} from "@mui/material";
import {ChangeEvent} from "react";
import {IParameter} from "../../types/model.types";

export const Parameter = ({ name,title,onChange}: ParametrProps) => {
;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        }}>
            <TextField sx={{width:'100%'}} value={title} variant='outlined' label={`Описание параметра ${name}`} name='title' onChange={handleChange} />
        </Box>
    );
};