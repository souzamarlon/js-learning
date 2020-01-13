import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';

import { Container, Title, Button, Content } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function MemberShip() {
    const [membership, setMembership] = useState([]);

    async function handleDelete(id) {
        if (window.confirm('Você realmente quer deletar?')) {
            await api.delete(`memberships/${id}`);
            history.push('/student');
        }
    }

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('memberships');

            const membershipList = response.data.map(item => ({
                ...item,
                start_date: format(
                    parseISO(item.start_date),
                    "d 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
                end_date: format(
                    parseISO(item.end_date),
                    "d 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
            }));

            setMembership(membershipList);
        }

        listStudents();
    }, []);

    // console.tron.log(membership);

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
                <thead>
                    <tr>
                        <th>ALUNO</th>
                        <th>PLANO</th>
                        <th>INICIO</th>
                        <th>TÉRMINO</th>
                        <th>ATIVA</th>
                    </tr>
                </thead>

                <tbody>
                    {membership.map(item => (
                        <tr>
                            <td>
                                <span className="name">
                                    {item.student.name}
                                </span>
                            </td>

                            <td>
                                <span className="title">{item.plan.title}</span>
                            </td>

                            <td>
                                <span className="start_date" type="date">
                                    {item.start_date}
                                </span>
                            </td>
                            <td>
                                <span className="end_date" type="date">
                                    {item.end_date}
                                </span>
                            </td>
                            <td>
                                <span className="active">
                                    {item.active.toString()}
                                </span>
                            </td>
                            <td>
                                <button type="button" onClick={() => {}}>
                                    <Link
                                        to={`/EditMemberShip/${item.student.id}`}
                                    >
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
