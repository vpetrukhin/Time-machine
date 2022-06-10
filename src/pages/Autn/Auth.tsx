import React, {ChangeEvent, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {setIsAuth} from "../../store/slices/auth";
import {PageBox} from "../../components";

export const Auth = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = () => {
      dispatch(setIsAuth({ login, password }));
    }

    return (
        <PageBox sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                <Button variant='outlined' onClick={handleSubmit}>Войти</Button>
            </Box>
        </PageBox>
    );
};