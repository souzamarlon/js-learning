import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function EditPlan({ match }) {
    const [plan, setPlan] = useState([]);

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

            // TODO Criar um campo virtual no back end para retornar o valor total.
            const { price, duration } = dataDetails;

            const totalPrice = price * duration;

            const dataPlan = [dataDetails, totalPrice];

            // console.tron.log(dataPlan);

            setPlan(dataDetails);
        }
        loadDetails();
    }, [id]);

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
                        <Input name="totalPrice" className="totalPrice" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
