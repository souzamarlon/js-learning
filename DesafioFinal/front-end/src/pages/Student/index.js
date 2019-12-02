import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container, Title, Button, Content, List } from './styles';
import api from '~/services/api';

export default function Student() {
    const [student, setStudent] = useState([]);

    async function searchStudents({ search }) {
        const searchName = search;
        const response = api.get(`students?q=${searchName}`);

        console.tron.log(response.data);
    }
    // const searchStudents = useCallback(search => {

    // }, []);

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
                        <Link to="/">
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
                        {/* <button type="submit" /> */}
                    </Form>
                </Button>
            </Container>
            <Content>
                <header>
                    <span className="name">NOME</span>
                    <span className="email">E-MAIL</span>
                    <span className="idade">IDADE</span>
                </header>

                <List>
                    {student.map(item => (
                        <ul>
                            <span className="name">{item.name}</span>
                            <span className="email">{item.email}</span>
                            <span className="idade">{item.idade}</span>
                            <button
                                type="button"
                                className="delete"
                                onClick={() => {}}
                            >
                                <Link
                                    className="delete"
                                    to={`/detail/${item.id}`}
                                >
                                    apagar
                                </Link>
                            </button>
                            <button type="button" classn onClick={() => {}}>
                                <Link to={`/edit/${item.id}`}> editar </Link>
                            </button>

                            <div className="divider" />
                        </ul>
                    ))}
                </List>
            </Content>
        </>
    );
}
