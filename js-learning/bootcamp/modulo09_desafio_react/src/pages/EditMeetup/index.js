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

    function handleSubmit(data) {
        api.put(`meetups/${id}`, data);
        // history.push('/');
        // console.tron.log(data);
    }

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('meetups');

            const [dataDetails] = response.data.filter(item => {
                return item.id == id;
            });

            // console.tron.log(dataDetails);
            setMeetupEdit(dataDetails);
        }
        loadDetails();
    }, [id]);

    return (
        <>
            {/* {meetupDetails.map(item => ())} */}
            <Container>
                <Form onSubmit={handleSubmit} initialData={meetupEdit}>
                    <BannerInput name="image" />

                    <Input name="title" />

                    <Input
                        multiline
                        name="description"
                        className="description"
                        rows={10}

                        // value="description"
                    />

                    <Input name="date" />
                    <Input name="location" />

                    <button type="submit">
                        <IoIosAddCircleOutline size={19} color="#FFF" />
                        <strong>Salvar o meetup</strong>
                    </button>
                </Form>
            </Container>
        </>
    );
}
