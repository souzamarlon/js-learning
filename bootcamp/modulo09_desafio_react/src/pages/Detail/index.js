import React, { useState, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { Container, Banner } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Detail({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);

    const [meetupId] = useState(match.params.id);

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');

            const dataDetails = response.data.filter(item => {
                item.date = format(
                    parseISO(item.date),
                    "d 'de' MMMM', às' HH:mm'h'",
                    {
                        locale: pt,
                    }
                );
                // eslint-disable-next-line
                return item.id == meetupId;
            });
            console.tron.log(dataDetails);

            setMeetupDetails(dataDetails);
        }

        loadMeetup();
    }, [meetupId]);

    function handleGetOut() {
        api.delete(`meetups/${meetupId}`);
        history.push('/dashboard');
    }

    // console.tron.log(meetupDetails);
    return (
        <>
            {meetupDetails.map(item => (
                <Container>
                    <header>
                        <h1>{item.title}</h1>
                        <button
                            type="button"
                            className="Editar"
                            onClick={() => {}}
                        >
                            <EditIcon size={20} color="#FFF" />
                            <strong>Editar</strong>
                        </button>
                        <button
                            type="button"
                            className="Cancelar"
                            onClick={() => handleGetOut()}
                        >
                            <DeleteForeverIcon size={20} color="#FFF" />
                            <strong>Cancelar</strong>
                        </button>
                    </header>

                    <Banner>
                        <img src={item.banner.url} alt="" />
                    </Banner>

                    <p>{item.description}</p>

                    <h2>
                        <EventIcon className="EventIcon" /> {item.date}
                        <span>
                            <PlaceIcon className="PlaceIcon" /> {item.location}
                        </span>
                    </h2>
                </Container>
            ))}
        </>
    );
}
