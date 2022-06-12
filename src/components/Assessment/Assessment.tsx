import React, {useEffect, useState} from 'react';
import {Box, Button, List, ListItem, Typography} from "@mui/material";
import {IParameterValueObj, IResModel} from "../../types/model.types";
import service from "../../sevices/Auth";
import {Argument} from "../Argument/Argument";

export const Assessment = ({onSetParametres}: {onSetParametres: (params: IParameterValueObj[]) => void}) => {
    const [modelList, setModelList] = useState<IResModel[]>([]);
    const [paramsValue, setParamsValue] = useState<IParameterValueObj[]>([]);

    useEffect(() => {
        service.getModel().then(res => {
            setModelList(res.data);
            const paramsValue = res.data.map((model: IResModel) => ({
                equationId: model.id,
                param: model.paramEquationList.map(param => ({
                    key: param.name,
                    value: '',
                }))
            }));
            setParamsValue(paramsValue);
        }, e => console.log(e))
    }, [])

    // const getArguments = (equation: string): string[] => {
    //     const endOfArgs: number = equation.indexOf(')', 1);
    //     const argsStr: string = equation.substring(1, endOfArgs);
    //     const argsArr: string[] = argsStr.trim().split(',');
    //
    //     return argsArr;
    // }

    const handleChangeParamValue = (value: string, modelID: number, key: string, index: number) => {

        const currentParamIndex: number = paramsValue.findIndex(param => param.equationId === modelID);
        if (currentParamIndex !== -1) {
            const param = paramsValue[currentParamIndex].param;
            param[index] = {...param[index], value};
        }

    }

    const handleStartMachine = () => {
        onSetParametres(paramsValue)

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
                                    {model.paramEquationList.map((param, index) => (
                                        <ListItem>
                                            <Argument key={param.id} argument={param.name} title={param.title}
                                                      modelID={model.id} onChange={handleChangeParamValue}
                                                      index={index}/>
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