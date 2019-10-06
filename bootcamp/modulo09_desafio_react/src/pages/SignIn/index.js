import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
    // const dispatch = useDispatch();
    // const loading = useSelector(state => state.auth.loading);

    // function handleSubmit({ email, password }) {}
    return (
        <>
            <img src={logo} alt="Meetup" />
            <Form schema={schema}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha super secreta"
                />

                <button type="submit">
                    {/* {loading ? 'Carregando... ' : 'Acessar'} */}
                    Entrar
                </button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
