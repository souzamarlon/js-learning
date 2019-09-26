import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_dash.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>Marlon Souza</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Marlon Souza"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
