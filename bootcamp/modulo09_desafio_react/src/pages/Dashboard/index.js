import React from 'react';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <h1>Meus meetups</h1>
            <button type="button" onClick={() => {}}>
                <IoIosAddCircleOutline size={14} /> Novo meetup
            </button>
        </Container>
    );
}
