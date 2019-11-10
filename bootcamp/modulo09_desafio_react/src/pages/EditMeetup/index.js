import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';
import { Form, Input } from '@rocketseat/unform';
import { IoIosAddCircleOutline } from 'react-icons/io';

import BannerInput from './BannerInput';

import history from '~/services/history';

import { Container } from './styles';

import api from '~/services/api';

export default function NewMeetup({ match }) {
    const [meetupEdit, setMeetupEdit] = useState([]);

    const [id] = useState(match.params.id);

    // async function handleSubmit(image, title, description, location, date) {
    //     // image, title, description, location;
    //     await api.put(
    //         `meetups/${id}`,
    //         id,
    //         image,
    //         title,
    //         description,
    //         location,
    //         date
    //     );
    //     // history.push('/');
    //     console.tron.log(meetupEdit);
    // }

    const handleSubmit = useCallback(() => {
        api.put(`meetups/${id}`, meetupEdit.title);
        // history.push('/dashboard');
    }, [id, meetupEdit]);

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('meetups');

            const [dataDetails] = response.data.map(item => ({
                user_id: item.user_id,
                title: item.title,
                description: item.description,
                image: item.banner.id,
                date: item.date,
                location: item.location,
            }));

            setMeetupEdit(dataDetails);
        }
        loadDetails();
    }, [id]);

    console.tron.log(meetupEdit);

    return (
        <>
            {/* {meetupDetails.map(item => ())} */}
            <Container>
                <Form onSubmit={handleSubmit} initialData={meetupEdit}>
                    {/* <BannerInput name="image" /> */}

                    <Input name="title" onChange={setMeetupEdit} />

                    <Input
                        multiline
                        name="description"
                        className="description"
                        rows={10}
                        placeholder="Descrição completa"
                        // value="description"
                    />

                    <Input name="date" placeholder="Data do meetup" />
                    <Input name="location" placeholder="Localização" />

                    <button type="submit">
                        <IoIosAddCircleOutline size={19} color="#FFF" />
                        <strong>Salvar o meetup</strong>
                    </button>
                </Form>
            </Container>
        </>
    );
}
