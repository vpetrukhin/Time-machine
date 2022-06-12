import React from 'react';
import {Header, PageBox, Model} from "../../components";
import {Box, Button, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {addModel} from "../../store/slices/form";

export const AdminPage = () => {
    const { models } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddFunc = () => {
        dispatch(addModel());
    }

    console.log('render')

    const handleSubmit = () => {
        console.log(models);
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
                    }}>Добавить модель</Button>
                    <Box noValidate autoComplete="off" component='form' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {models.map((model, index) => (
                            <Model key={model.name+ `${Math.random() * 100000000000}`} index={index} />
                        ))}
                        <Button variant='contained' onClick={handleSubmit}>Отправить в систему</Button>
                    </Box>
                </main>
            </Container>
        </PageBox>
    );
};
