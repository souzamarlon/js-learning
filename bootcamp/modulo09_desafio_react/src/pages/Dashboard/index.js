import React, { useState, useMemo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { Container, List } from './styles';

import api from '~/services/api';

export default function Dashboard() {
    // const [userId, setDate] = useState(new Date());

    const { id, name, email, provider } = useSelector(
        state => state.user.profile
    );

    async function loadMeetup() {
        const response = await api.get('meetups');
        console.tron.log(response);
    }

    loadMeetup();

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
                <List>
                    <h1>Marlon</h1>
                    <span>20 de outubro, às 11h</span>
                    <button type="button" onClick={() => {}}>
                        <MdChevronRight size={25} color="#FFF" />
                    </button>
                </List>
                <List>
                    <h1>Marlon</h1>
                    <span>20 de maio, às 11h</span>
                    <button type="button" onClick={() => {}}>
                        <MdChevronRight size={25} color="#FFF" />
                    </button>
                </List>
                <List>
                    <h1>Marlon</h1>
                    <span>21:00</span>
                </List>
            </ul>
        </Container>
    );
}
