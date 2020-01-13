import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewStudent() {
    const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        idade: Yup.number()
            .required()
            .positive()
            .integer(),
        peso: Yup.number()
            .nullable()
            .typeError('Peso precisa ser um número')
            .transform((cv, ov) => (ov === '' ? null : cv))
            .positive(),
        altura: Yup.number()
            .nullable()
            .typeError('Altura precisa ser um número')
            .transform((cv, ov) => (ov === '' ? null : cv))
            .positive(),
    });

    // TODO Criar um validador para mostrar se o email já existe!

    function handleSubmit(data) {
        try {
            api.post('students/', data);

            toast.success('Sucesso ao criar o cadastro!');
            history.push('/');
            console.tron.log(data);
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
        }
    }

    return (
        <>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de aluno</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/">
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
                    <p>NOME COMPLETO</p>
                    <Input name="name" className="name" />
                    <p>ENDEREÇO DE E-MAIL</p>
                    <Input name="email" className="name" />
                    <Table>
                        <h1>IDADE</h1>
                        <h1>PESO (em kg)</h1>
                        <h1>Altura</h1>
                        <Input name="idade" className="idade" />
                        <Input name="peso" className="peso" />
                        <Input name="altura" className="altura" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
