import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewPlan() {
    function handleSubmit(data) {
        api.post('plans', data);
        history.push('/plans');
        console.tron.log(data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de plano</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/plans">
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
                    <p>TÍTULO DO PLANO</p>
                    <Input name="title" className="title" />
                    <Table>
                        <h1>DURAÇÃO (em meses)</h1>
                        <h1>PREÇO MENSAL</h1>
                        <h1>PREÇO TOTAL</h1>
                        <Input name="duration" className="duration" />
                        <Input name="price" className="priceMonthly" />
                        <Input name="totalPrice" className="totalPrice" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
