import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container, Title, Button, Content, List } from './styles';
import api from '~/services/api';

export default function Student() {
    const [student, setStudent] = useState([]);

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
                    <Form onSubmit={() => {}}>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Buscar aluno"
                        />
                    </Form>
                </Button>
            </Container>
            <Content>
                <header>
                    <span className="name">NOME</span>
                    <span className="email">E-MAIL</span>
                    <span className="idade">IDADE</span>
                </header>

                {student.map(item => (
                    <List>
                        <div className="divider" />
                        <strong>{item.name}</strong>
                        <h1>{item.email}</h1>
                        <span>{item.idade}</span>
                        {/* <button type="button" onClick={() => {}}>
                                <Link to={`/detail/${item.id}`} />
                            </button> */}
                    </List>
                ))}
            </Content>
        </>
    );
}
