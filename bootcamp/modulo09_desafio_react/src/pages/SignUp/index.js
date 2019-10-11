import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Informe o seu nome'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatoria'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="Meetup" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Digite o seu nome" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha super secreta"
                />

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}