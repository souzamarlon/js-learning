import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Container, Title, Content } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function HelpOrder() {
    const [help, setHelp] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function listHelpOrders() {
            const response = await api.get('students/help-orders');

            setHelp(response.data);
        }

        listHelpOrders();
    }, []);

    const handleClickOpen = id => {
        const questionOpen = help.filter(item => {
            return item.id === id;
        });
        console.tron.log(questionOpen);
        setHelp(questionOpen);
        setOpen(true);
    };

    const handleClose = () => {
        async function listHelpOrders() {
            const response = await api.get('students/help-orders');

            setHelp(response.data);
        }
        listHelpOrders();
        setOpen(false);
    };

    return (
        <>
            <Container>
                <Title>
                    <h1>Pedidos de auxílio</h1>
                </Title>
            </Container>
            <Content>
                <thead>
                    <tr>
                        <th>ALUNO</th>
                    </tr>
                </thead>

                <tbody>
                    {help.map(item => (
                        <tr>
                            <td>
                                <span className="name">
                                    {item.student.name}
                                </span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleClickOpen(item.id)}
                                    >
                                        responder
                                    </button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="form-dialog-title"
                                    >
                                        <DialogTitle id="form-dialog-title">
                                            PERGUNTA DO ALUNO
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                {item.question}
                                            </DialogContentText>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                rows="5"
                                                defaultValue="Default Value"
                                                variant="outlined"
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={handleClose}
                                                color="primary"
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                onClick={handleClose}
                                                color="primary"
                                            >
                                                Subscribe
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </>
    );
}
