import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { IoIosAddCircleOutline } from 'react-icons/io';

import BannerInput from './BannerInput';

import history from '~/services/history';

import { Container } from './styles';

import api from '~/services/api';

export default function NewMeetup({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);

    const [detailId] = useState(match.params.id);
    console.tron.log(detailId);

    async function handleSubmit(title, description, location, image, date) {
        await api.post('meetups', title, description, location, image, date);

        history.push('/');
    }

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');

            const dataDetails = response.data.filter(item => {
                // eslint-disable-next-line
                return item.id == detailId;
            });

            setMeetupDetails(dataDetails);
        }

        loadMeetup();
    }, [detailId]);

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
