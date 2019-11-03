import React, { useState, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container, Banner } from './styles';

import api from '~/services/api';

export default function Detail({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);

    const [id] = useState(match.params.id);

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');
            console.tron.log(response.data);
            const dataDetails = response.data.filter(item => {
                // eslint-disable-next-line eqeqeq
                return item.id == id;
            });

            setMeetupDetails(dataDetails);
        }

        loadMeetup();
    }, [id, meetupDetails.id]);

    // console.tron.log(meetupDetails);
    return (
        <>
            {meetupDetails.map(item => (
                <Container>
                    <header>
                        <h1>{item.title}</h1>
                        <button type="button" onClick={() => {}}>
                            <IoIosAddCircleOutline size={19} color="#FFF" />
                            <strong>Novo meetup</strong>
                        </button>
                    </header>

                    <Banner>
                        <img src={item.banner.url} alt="" />
                    </Banner>

                    <p>{item.description}</p>
                </Container>
            ))}
        </>
    );
}
