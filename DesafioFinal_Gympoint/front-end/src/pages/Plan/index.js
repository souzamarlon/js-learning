import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container, Title, Button, Content, List } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Plan() {
    const [plan, setPlan] = useState([]);

    async function handleDelete(id) {
        console.tron.log(id);

        if (window.confirm('Você realmente quer deletar?')) {
            await api.delete(`plans/${id}`);
            history.push('/plans');
        }
    }

    useEffect(() => {
        async function listPlans() {
            const response = await api.get('plans');
            console.tron.log(response.data);

            setPlan(response.data);
        }

        listPlans();
    }, []);

    return (
        <>
            <Container>
                <Title>
                    <h1>Gerenciando planos</h1>
                </Title>
                <Button>
                    <div>
                        <Link to="/newplan">
                            <button type="button" onClick={() => {}}>
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                </Button>
            </Container>
            <Content>
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>DURAÇÃO</th>
                        <th>VALOR p/ MÊS</th>
                    </tr>
                </thead>

                <tbody>
                    {plan.map(item => (
                        <tr>
                            <td>
                                <span className="title">{item.title}</span>
                            </td>
                            <td>
                                <span className="duration">
                                    {item.duration}
                                </span>
                            </td>
                            <td>
                                <span className="price">{item.price}</span>
                            </td>
                            <td>
                                <button type="button" onClick={() => {}}>
                                    <Link to={`/editplan/${item.id}`}>
                                        editar
                                    </Link>
                                </button>
                                <button
                                    type="button"
                                    className="delete"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    apagar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </>
    );
}
