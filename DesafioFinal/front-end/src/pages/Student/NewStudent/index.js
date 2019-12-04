import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewStudent() {
    // TODO Criar um validador para mostrar se o email já existe!

    function handleSubmit(data) {
        api.post('students/', data);
        history.push('/');
        console.tron.log(data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
                </Content>
            </Form>
        </>
    );
}
