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
                    <span className="email">PLANO</span>
                    <span className="idade">INICIO</span>
                </header>

                <List>
                    {membership.map(item => (
                        <>
                            <ul>
                                <span className="name">
                                    {item.student.name}
                                </span>
                                <span className="email">{item.plan.title}</span>
                                <span className="idade">{item.idade}</span>
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
