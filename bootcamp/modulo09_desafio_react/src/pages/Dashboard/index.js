import React from 'react';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { Container, List } from './styles';

export default function Dashboard() {
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
