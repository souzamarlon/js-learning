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
                    <h1>Marlon</h1>
                    <span>21:00</span>
                </List>
                <List>
                    <h1>Marlon</h1>
                    <span>21:00</span>
                </List>
                <List>
                    <h1>Marlon</h1>
                    <span>21:00</span>
                </List>
            </ul>
        </Container>
    );
}
