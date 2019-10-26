import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { Container, List } from './styles';

import api from '~/services/api';

export default function Dashboard() {
    const [meetup, setMeetup] = useState([]);

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
    }, []);

    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <button type="button" onClick={() => {}}>
                    <IoIosAddCircleOutline size={19} />
                    <strong>Novo meetup</strong>
                </button>
            </header>

            <ul>
                {meetup.map(item => (
                    <List key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.date}</span>
                        <button type="button" onClick={() => {}}>
                            <MdChevronRight size={25} color="#FFF" />
                        </button>
                    </List>
                ))}

                {/* <List>
                    <h1>Marlon</h1>
                    <span>20 de outubro, às 11h</span>
                    <button type="button" onClick={() => {}}>
                        <MdChevronRight size={25} color="#FFF" />
                    </button>
                </List> */}
            </ul>
        </Container>
    );
}
