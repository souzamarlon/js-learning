import React from 'react';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { Container, List } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <button type="button" onClick={() => {}}>
                    <IoIosAddCircleOutline size={17} />
                    <strong>Novo meetup</strong>
                </button>
            </header>
            <ul>
                <List>
                    <li>
                        <strong>21:00</strong>
                        <span>Marlon</span>
                    </li>
                    <li>
                        <strong>21:00</strong>
                        <span>Marlon</span>
                    </li>
                </List>
            </ul>
        </Container>
    );
}
