import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import { Container, Title, Button, Content, List } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Student() {
    const [student, setStudent] = useState([]);

    const searchStudents = useCallback(({ search }) => {
        async function searchTool() {
            const response = await api.get(`students`, {
                params: { q: search },
            });

            console.tron.log(response.data);

            setStudent(response.data);
        }
        searchTool();
    }, []);

    async function handleDelete(id) {
        console.tron.log(id);
        try {
            if (window.confirm('Você realmente quer deletar?')) {
                await api.delete(`students/${id}`);

                toast.success('Sucesso ao deletar os dados!');
                history.push('/');
            }
        } catch (err) {
            toast.error('Erro ao deletar os dados!');
        }
    }

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('students');
            console.tron.log(response.data);

            setStudent(response.data);
        }

        listStudents();
    }, []);

    return (
        <>
            <Container>
                <Title>
                    <h1>Gerenciando alunos</h1>
                </Title>
                <Button>
                    <div>
                        <Link to="/newstudent">
                            <button type="button" onClick={() => {}}>
                                <strong>CADASTRAR</strong>
                            </button>
                        </Link>
                    </div>
                    <Form onSubmit={searchStudents}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar aluno"
                        />
                    </Form>
                </Button>
            </Container>
            <Content>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>IDADE</th>
                    </tr>
                </thead>

                <tbody>
                    {student.map(item => (
                        <tr>
                            <td>
                                <span className="name">{item.name}</span>
                            </td>
                            <td>
                                <span className="email">{item.email}</span>
                            </td>
                            <td>
                                <span className="idade">{item.idade}</span>
                            </td>
                            <td>
                                <button type="button" onClick={() => {}}>
                                    <Link to={`/editstudent/${item.id}`}>
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
