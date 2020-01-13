import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';
import { formatPrice } from '~/util/format';

export default function NewPlan() {
    const [planDetail, setPlanDetail] = useState([
        { duration: '', price: formatPrice(0), totalPrice: formatPrice(0) },
    ]);

    async function handleSubmit(data) {
        await api.post('plans', data);
        history.push('/plans');
        console.tron.log(data);
    }
    async function addDuration(duration) {
        setPlanDetail({
            ...planDetail,
            duration,
        });
    }
    async function showTotal(price) {
        setPlanDetail({
            ...planDetail,
            price: formatPrice(price),
            totalPrice: formatPrice(planDetail.duration * price),
        });
        // setPlanDetail({ ...planDetail, totalPrice: price * duration });
    }

    console.tron.log(addDuration);

    return (
        <>
            <Form initialData={planDetail} onSubmit={handleSubmit}>
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
                        <Input
                            name="duration"
                            className="duration"
                            onChange={e => addDuration(e.target.value)}
                        />
                        <Input
                            name="price"
                            className="priceMonthly"
                            onChange={e => showTotal(e.target.value)}
                            // disabled={false}
                        />
                        <Input
                            name="totalPrice"
                            className="totalPrice"
                            disabled
                        />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
