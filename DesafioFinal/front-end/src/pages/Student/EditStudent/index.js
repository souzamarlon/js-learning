import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function EditStudent({ match }) {
    const [studentEdit, setStudentEdit] = useState([]);

    const [id] = useState(match.params.id);

    function handleSubmit(data) {
        try {
            api.put(`students/${id}`, data);

            toast.success('Sucesso ao criar o cadastro!');

            history.push('/');
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            console.tron.log(err);
        }
    }

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('students');

            const [dataDetails] = response.data.filter(item => {
                return item.id == id;
            });

            // console.tron.log(dataDetails);
            setStudentEdit(dataDetails);
        }
        loadDetails();
    }, [id]);

    return (
        <>
            <Form initialData={studentEdit} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Edição de aluno</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/">
                                <button type="button" onClick={() => {}}>
                                    <strong>VOLTAR</strong>
                                </button>
                            </Link>
                        </div>

                        <button type="submit" className="submit">
                            <strong>SALVAR</strong>
                        </button>
                    </Button>
                </Container>
                <Content>
                    <p>NOME COMPLETO</p>
                    <Input name="name" className="name" />
                    <p>ENDEREÇO DE E-MAIL</p>
                    <Input name="email" className="name" />
                    <Table>
                        <h1>IDADE</h1>
                        <h1>PESO (em kg)</h1>
                        <h1>Altura</h1>
                        <Input name="idade" className="idade" />
                        <Input name="peso" className="peso" />
                        <Input name="altura" className="altura" />
                    </Table>
                    {/* <button type="submit" className="submit">
                        <strong>SALVAR</strong>
                    </button> */}
                </Content>
            </Form>
        </>
    );
}
