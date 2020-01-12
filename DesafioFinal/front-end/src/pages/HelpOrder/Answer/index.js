import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { Container } from './styles';

export default function Answer() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = id => {
        const questionOpen = help.filter(item => {
            return item.id === id;
        });
        console.tron.log(questionOpen);

        setOpen(true);
    };

    return (
        <div>
            <button
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
                    <DialogContentText>{item.question}</DialogContentText>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
