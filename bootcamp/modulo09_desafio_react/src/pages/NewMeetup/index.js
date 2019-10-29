import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { IoIosAddCircleOutline } from 'react-icons/io';

import BannerInput from './BannerInput';

import { Container } from './styles';

import api from '~/services/api';

export default function Profile() {
    const [newMeetup, setNewMeetup] = useState();
    async function handleSubmit() {
        const { title, description, location, image, date } = newMeetup;
        const response = await api.post('meetups', {
            title,
            description,
            location,
            image,
            date,
        });

        setNewMeetup(response);
    }

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

                <Input type="date" name="date" placeholder="Data do meetup" />
                <Input
                    type="location"
                    name="location"
                    placeholder="Localização"
                />

                <button type="submit">
                    <IoIosAddCircleOutline size={19} color="#FFF" />
                    <strong>Salvar o meetup</strong>
                </button>
            </Form>
        </Container>
    );
}
