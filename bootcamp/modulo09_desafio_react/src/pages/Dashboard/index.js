import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, List } from './styles';

import api from '~/services/api';

export default function Dashboard() {
    const [meetup, setMeetup] = useState([]);

    console.tron.log(meetup);

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');

            const data = response.data.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    date: format(
                        parseISO(item.date),
                        "d 'de' MMMM', às' HH:mm'h'",
                        {
                            locale: pt,
                        }
                    ),
                };
            });

            setMeetup(data);
        }
        loadMeetup();
    }, [meetup]);

    // {{ pathname: `/detail/${item.id}` }}
    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <Link to="/newmeetup">
                    <button type="button" onClick={() => {}}>
                        <IoIosAddCircleOutline size={19} color="#FFF" />
                        <strong>Novo meetup</strong>
                    </button>
                </Link>
            </header>

            <ul>
                {meetup.map(item => (
                    <List key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.date}</span>
                        <button type="button" onClick={() => {}}>
                            <Link to={`/detail/${item.id}`}>
                                <MdChevronRight size={25} color="#FFF" />
                            </Link>
                        </button>
                    </List>
                ))}
            </ul>
        </Container>
    );
}
