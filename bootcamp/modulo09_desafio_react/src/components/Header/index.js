import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '~/assets/logo_dash.svg';

export default function Header() {
    return (
        <Container>
            <>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="Meetup" />
                    </Link>
                </nav>
            </>
        </Container>
    );
}
