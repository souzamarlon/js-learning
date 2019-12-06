import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container, Title, Button, Content, List } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function MemberShip() {
    const [membership, setMembership] = useState([]);

    async function handleDelete(id) {
        console.tron.log(id);

        if (window.confirm('Você realmente quer deletar?')) {
            await api.delete(`memberships/${id}`);
            history.push('/student');
        }
    }

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('memberships');
            console.tron.log(response.data);

            setMembership(response.data);
        }

        listStudents();
    }, []);

    return (
        <>
            <Container>
                <Title>
                    <h1>Gerenciando matrículas</h1>
                </Title>
                <Button>
                    <div>
                        <Link to="/newmembership">
                            <button type="button" onClick={() => {}}>
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                </Button>
            </Container>
            <Content>
                <header>
                    <span className="name">ALUNO</span>
                    <span className="plan">PLANO</span>
                    <span className="start_date">INICIO</span>
                    <span className="end_date">TÉRMINO</span>
                    <span className="active">ATIVA</span>
                </header>

                <List>
                    {membership.map(item => (
                        <>
                            <ul key={item.id}>
                                <span className="name">
                                    {item.student.name}
                                </span>
                                <span className="title">{item.plan.title}</span>
                                <span className="start_date" type="date">
                                    {item.start_date}
                                </span>
                                <span className="end_date" type="date">
                                    {item.end_date}
                                </span>
                                <span className="active">
                                    {item.active.toString()}
                                </span>

                                <button
                                    type="button"
                                    className="delete"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    apagar
                                </button>
                                <button type="button" onClick={() => {}}>
                                    <Link to={`/editstudent/${item.id}`}>
                                        editar
                                    </Link>
                                </button>
                            </ul>
                            <div className="divider" />
                        </>
                    ))}
                </List>
            </Content>
        </>
    );
}
