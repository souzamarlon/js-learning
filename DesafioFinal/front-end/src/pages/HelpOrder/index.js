import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container, Title, Content } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function HelpOrder() {
    const [help, setHelp] = useState([]);

    useEffect(() => {
        async function listHelpOrders() {
            const response = await api.get('students/help-orders');

            setHelp(response.data);
        }

        listHelpOrders();
    }, []);

    console.tron.log(help);

    return (
        <>
            <Container>
                <Title>
                    <h1>Pedidos de auxílio</h1>
                </Title>
            </Container>
            <Content>
                <thead>
                    <tr>
                        <th>ALUNO</th>
                    </tr>
                </thead>

                <tbody>
                    {help.map(item => (
                        <tr>
                            <td>
                                <span className="name">
                                    {item.student.name}
                                </span>
                            </td>
                            <td>
                                <button type="button" onClick={() => {}}>
                                    <Link to={`/editplan/${item.id}`}>
                                        responder
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Content>
        </>
    );
}
