import {Box, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, useState} from "react";

export const Argument = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant='subtitle2' color='#fff'>argument</Typography>
            <TextField value={value} variant='outlined' onChange={handleChange} />
        </Box>
    );
};