import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="#FFF" />
                </button>
                <stron>31 de Maio</stron>
                <button type="button">
                    <MdChevronRight size={36} color="#FFF" />
                </button>
            </header>

            <ul>
                <Time past>
                    <strong>21:00</strong>
                    <span> Marlon Souza</span>
                </Time>
                <Time available>
                    <strong>22:00</strong>
                    <span>Em aberto</span>
                </Time>
                <Time>
                    <strong>23:00</strong>
                    <span> Marlon Souza</span>
                </Time>
                <Time>
                    <strong>00:00</strong>
                    <span> Marlon Souza</span>
                </Time>
            </ul>
        </Container>
    );
}
