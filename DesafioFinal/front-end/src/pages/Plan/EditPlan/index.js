import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';
import { formatPrice } from '~/util/format';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function EditPlan({ match }) {
    const [plan, setPlan] = useState([{ totalPrice: formatPrice(0) }]);

    const [id] = useState(match.params.id);

    function handleSubmit(data) {
        api.put(`plans/${id}`, data);
        // history.push('/');
        // console.tron.log(data);
    }

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('plans');

            const [dataDetails] = response.data.filter(item => {
                return item.id == id;
            });

            // console.tron.log(dataPlan);

            setPlan({
                ...dataDetails,
                totalPrice: formatPrice(
                    dataDetails.duration * dataDetails.price
                ),
            });
        }
        loadDetails();
    }, [id, plan]);

    console.tron.log(plan);

    return (
        <>
            <Form initialData={plan} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Edição de plano</h1>
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
