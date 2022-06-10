import React, {ChangeEvent, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

export const Auth = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'secondary.main',
        }}>
            <Box noValidate autoComplete="off" component='form' sx={{
                maxWidth: '500px',
                width: '25%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant='h2' color='#e3f2fd'>Авторизация</Typography>
                <TextField value={login} variant='outlined' color='primary' required id='login' placeholder='Логин'
                           margin="normal" onChange={handleLoginChange}/>
                <TextField value={password} type='password' variant='outlined' required id='password'
                           placeholder='Пароль' margin="normal" onChange={handlePasswordChange}/>
                <Button variant='outlined'>Войти</Button>
            </Box>
        </Box>
    );
};