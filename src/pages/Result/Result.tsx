import React from 'react';
import {Header, PageBox} from "../../components";
import {Box, Button, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {addFunction} from "../../store/slices/form";
import {Function} from "../../components/Function/Function";

export const Result = () => {
    const { functions } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddFunc = () => {
        dispatch(addFunction());
    }

    const handleSubmit = () => {
        const functionString: string[] = functions.map(func => func.value);
        console.log(functionString);
    }

    return (
        <PageBox>
            <Container sx={{
                paddingTop: '2rem',
            }}>
                <Header />
                <main>
                    <Button variant='contained' onClick={handleAddFunc} sx={{
                        marginBottom: '20px',
                    }}>Добавить функцию</Button>
                    <Box noValidate autoComplete="off" component='form' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {functions.map((func, index) => (
                            <Function {...func} index={index} />
                        ))}
                        <Button variant='contained' onClick={handleSubmit}>Отправить на функции</Button>
                    </Box>
                </main>
            </Container>
        </PageBox>
    );
};
