import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import BannerInput from './BannerInput';

import { Container } from './styles';

export default function Profile() {
    function handleSubmit(data) {}

    function handleSignOut() {}

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="image" />
                <Input name="title" placeholder="Titulo do Meetup" />
                <Input
                    name="description"
                    type="description"
                    placeholder="Descrição completa"
                />

                <Input type="date" name="date" placeholder="Data do meetup" />
                <Input
                    type="location"
                    name="location"
                    placeholder="Localização"
                />

                <button type="submit">Salvar o meetup</button>
            </Form>
            <Link to="/dashboard">
                <button type="submit">Voltar</button>
            </Link>
        </Container>
    );
}
