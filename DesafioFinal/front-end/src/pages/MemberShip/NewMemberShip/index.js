import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewStudent() {
    // TODO Criar um validador para mostrar se o email já existe!

    function handleSubmit(data) {
        api.post('memberships/', data);
        history.push('/');
        console.tron.log(data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de matrícula</h1>
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
                    <p>ALUNO</p>
                    <Input name="name" className="name" />
                    <Table>
                        <h1>PLANO</h1>
                        <h1>DATA DE INÍCIO</h1>
                        <h1>DATA DE TÉRMINO</h1>
                        <h1>VALOR FINAL</h1>

                        <Input name="plano" className="plano" />
                        <Input name="start_date" className="start_date" />
                        <Input name="end_date" className="end_date" />
                        <Input name="final_price" className="final_price" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
