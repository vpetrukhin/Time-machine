import React, {useEffect, useState} from 'react';
import {Box, Button, List, ListItem, TextField, Typography} from "@mui/material";
import {IModel, IParameterValueObj} from "../../types/model.types";
import service from "../../sevices/Auth";

export const Assessment = () => {
    const [modelList, setModelList] = useState<IModel[]>([]);
    const [paramsValues, setParamsValue] = useState<IParameterValueObj[]>([]);

    useEffect(() => {
        service.getModel().then(res => setModelList(res.data), e => console.log(e))
    }, [])

    useEffect(() => {
        if (modelList.length > 0) {
            let result: IParameterValueObj[] = [];
            modelList.forEach((model) => {
                const obj: IParameterValueObj = {
                    equationId: model.id,
                    param: getArguments(model.equation).map(key => ({ key, value: '' }))
                }
                result.push(obj);
            });
            setParamsValue(result);
        }
    }, [modelList])

    const getArguments = (equation: string): string[] => {
        const endOfArgs: number = equation.indexOf(')', 1);
        const argsStr: string = equation.substring(1, endOfArgs);
        const argsArr: string[] = argsStr.trim().split(',');

        return argsArr;
    }

    const handleChangeParamValue = () => {

    }

    const handleStartMachine = () => {
        console.log('start');
    }

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Box sx={{
                width: '50%',
            }}>
                <List>
                    {modelList.length > 0 && modelList.map((model, index) => (
                            <ListItem sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Typography variant='h4' color='#fff'>{index + 1}</Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Typography variant='h6' color='#fff' sx={{
                                        paddingBottom: '5px',
                                    }}>{model.name}</Typography>
                                    <List sx={{
                                        display: 'flex',
                                        alignItems: 'flexStart'
                                    }}>
                                        {getArguments(model.equation).map((argument) => (
                                                <ListItem>

                                                </ListItem>
                                            ))}
                                    </List>

                                </Box>
                            </ListItem>
                        ))}
                </List>
                <Button variant='contained' fullWidth onClick={handleStartMachine}>Запустить машину времени</Button>
            </Box>
            <Box sx={{
                width: '50%',
            }}>
                <Typography variant='h6' color='#fff'>график</Typography>
            </Box>
        </Box>
    );
};