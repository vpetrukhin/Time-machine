import React, {useEffect, useState} from 'react';
import {Header, Model, PageBox} from "../../components";
import {Box, Button, Container, Modal} from "@mui/material";
import service from "../../sevices/Auth"
import {IModel, IParameter} from "../../types/model.types";
import {randomInt} from "crypto";

export const AdminPage = () => {

    const [modelList, setModelList] = useState<IModel[]>([]);
    const [model,setModel]=useState<IModel>({id: -1, name: "", equation: "", paramList: []} as IModel);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        service.getModel().then(res => setModelList(res.data), e => console.log(e))
    }, [])


    const handleAddFunc = () => {
        setModel({id: -1, name: "", equation: "", paramList: []});
        setOpen(true);
    }

    console.log('render')

    const handleChangeModel = (model: IModel) => {
        console.log(model)
        if (model.id === -1)
            setModelList((prev) => [...prev, {...model,id:Math.random()}]);
        else
            setModelList((prev) => {
                const a = [...prev];
                a[prev.findIndex(el=>el.id===model.id)] = {...model,id:a.length+1};
                return a
            })
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleEdit = (index:number)=>{
        setModel(modelList[index]);
        setOpen(true);
    }

    const handleDelete = (index: number) => {
        setModelList(prev => prev.filter((el, idx) => idx !== index))
    }

    const handleSubmit = () => {
        service.sendModel(modelList).then(r => console.log(r),e=>console.log(e));
    }

    return (
        <PageBox>
            <Container sx={{
                paddingTop: '2rem',
            }}>
                <Header/>
                <main>
                    <Button variant='contained' onClick={handleAddFunc} sx={{
                        marginBottom: '20px',
                    }}>Добавить модель</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{background: '#FF80FF'}}
                    >
                        <Model model={model}  setModel={handleChangeModel}/>
                    </Modal>
                    <Box noValidate autoComplete="off" component='form' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}><ul>
                        {modelList.map((model, index) => (
                         <li>
                             Название:{model.name}
                            Модель:{model.equation}
                             <Button variant={"contained"} onClick={()=>handleEdit(index)}>Edit</Button>
                             <Button variant={"contained"} onClick={()=>handleDelete(index)}>Delete</Button>
                         </li>
                        ))}
                    </ul>
                        <Button variant='contained' onClick={handleSubmit}>Отправить в систему</Button>
                    </Box>
                </main>
            </Container>

        </PageBox>
    );
};
