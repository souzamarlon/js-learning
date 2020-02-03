import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import Popup from 'reactjs-popup';
import { Form, Input } from '@rocketseat/unform';
import { Container, Title, Content, Answer } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function HelpOrder() {
    const [help, setHelp] = useState([]);

    useEffect(() => {
        async function listHelpOrders() {
            const response = await api.get('/help-orders');

            setHelp(response.data);
        }

        listHelpOrders();
    }, []);

    async function handleSubmit(data, id) {
        try {
            const response = await api.post(`help-orders/${id}/answer`, data);

            toast.success('Sucesso ao responder!');

            console.tron.log(response.data);
            history.push('/help-order');
        } catch (err) {
            toast.error('Erro ao responder!');
            console.tron.log(err);
            console.tron.log(data);
        }
    }

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
                                <Answer>
                                    <Form
                                        onSubmit={data => {
                                            handleSubmit(data, item.id);
                                        }}
                                    >
                                        <Popup
                                            trigger={
                                                <button
                                                    type="button"
                                                    className="button"
                                                >
                                                    responder
                                                </button>
                                            }
                                            modal
                                        >
                                            {close => (
                                                <div className="modal">
                                                    <a
                                                        className="close"
                                                        onClick={close}
                                                    >
                                                        &times;
                                                    </a>
                                                    <div className="header">
                                                        PERGUNTA DO ALUNO
                                                    </div>
                                                    <div className="content">
                                                        {item.question}
                                                    </div>
                                                    <div className="resp">
                                                        SUA RESPOSTA
                                                    </div>
                                                    <Input
                                                        multiline
                                                        name="answer"
                                                        className="answer"
                                                        rows={10}
                                                    />

                                                    <div className="actions">
                                                        <button
                                                            type="submit"
                                                            className="submit"
                                                        >
                                                            Responder aluno
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                    </Form>
                                </Answer>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </>
    );
}
