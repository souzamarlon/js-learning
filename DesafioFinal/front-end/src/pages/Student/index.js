import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container, Title, Button, Content } from './styles';
import api from '~/services/api';

export default function Student() {
    async function listStudents() {
        const response = await api.get('students');
        console.tron.log(response.data);
    }

    listStudents();
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
                            name="email"
                            type="email"
                            placeholder="exemplo@email.com"
                        />
                    </Form>
                </Button>
            </Container>
            <Content>
                <ul />
            </Content>
        </>
    );
}
