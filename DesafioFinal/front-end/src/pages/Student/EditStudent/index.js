import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function EditStudent({ match }) {
    const [studentEdit, setStudentEdit] = useState([]);

    const [id] = useState(match.params.id);

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
                    <Form onSubmit={() => {}}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar aluno"
                        />
                        {/* <button type="submit" /> */}
                    </Form>
                </Button>
            </Container>
            <Content>
                <Form onSubmit={() => {}} initialData={studentEdit}>
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

                    <button type="submit">
                        <strong>Salvar o meetup</strong>
                    </button>
                </Form>
            </Content>
        </>
    );
}
