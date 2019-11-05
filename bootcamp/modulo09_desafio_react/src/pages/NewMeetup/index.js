import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { IoIosAddCircleOutline } from 'react-icons/io';

import BannerInput from './BannerInput';

import history from '~/services/history';

import { Container } from './styles';

import api from '~/services/api';

export default function NewMeetup({ match }) {
    const [detailId] = useState(match.params.id);

    async function handleSubmit(title, description, location, image, date) {
        await api.post('meetups', title, description, location, image, date);

        history.push('/');
    }

    console.tron.log();

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="image" />
                <Input name="title" placeholder="Titulo do Meetup" />
                <Input
                    multiline
                    name="description"
                    class="description"
                    rows={10}
                    placeholder="Descrição completa"
                    // value="description"
                />

                <Input name="date" type="date" placeholder="Data do meetup" />
                <Input name="location" placeholder="Localização" />

                <button type="submit">
                    <IoIosAddCircleOutline size={19} color="#FFF" />
                    <strong>Salvar o meetup</strong>
                </button>
            </Form>
        </Container>
    );
}
