import React, { useState, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';

import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from 'react-icons/io';

import { Container, Banner } from './styles';

import api from '~/services/api';

export default function Detail({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);
    const [meetup, setMeetup] = useState([]);

    const [meetupID] = useState(match.params.id);

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');

            const dataDetails = response.data.filter(item => {
                return item.id == meetupID;
            });

            setMeetupDetails(dataDetails);
        }

        loadMeetup();
    }, [meetupID]);

    console.tron.log(meetupDetails);
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
                </Container>
            ))}
        </>
    );
}
