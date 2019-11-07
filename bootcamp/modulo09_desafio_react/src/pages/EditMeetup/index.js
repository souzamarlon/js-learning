import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';
import { Form, Input } from '@rocketseat/unform';
import { IoIosAddCircleOutline } from 'react-icons/io';

import BannerInput from './BannerInput';

import history from '~/services/history';

import { Container } from './styles';

import api from '~/services/api';

function NewMeetup({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);

    const [detailId] = useState(match.params.id);

    async function handleSubmit(title, description, location, image, date) {
        await api.put('meetups', title, description, location, image, date);

        history.push('/');
    }

    const response = api.get('meetups');

    const dataDetails = response.data.filter(item => {
        return item.id == detailId;
    });

    setMeetupDetails(dataDetails);
    console.tron.log(dataDetails);

    return (
        <Container>
            <Form onSubmit={handleSubmit} initialData={dataDetails}>
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

export default new NewMeetup();
