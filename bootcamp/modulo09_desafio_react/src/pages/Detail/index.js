import React, { useState, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';

import { Container, List } from './styles';
import api from '~/services/api';

export default function Detail({ match }) {
    const [meetupDetails, setMeetupDetails] = useState([]);
    const [meetup, setMeetup] = useState([]);

    const [meetupID] = useState(match.params.id);

    useEffect(() => {
        async function loadMeetup() {
            const response = await api.get('meetups');

            const dataDetails = response.data.filter(item => {
                return item.id == meetupID;
            });

            setMeetupDetails(dataDetails);
        }

        loadMeetup();
    }, [meetupID]);

    console.tron.log(meetupDetails);
    return (
        <Container>
            {meetupDetails.map(item => (
                <li>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                </li>
            ))}
        </Container>

        // <Container>
        //     {/* <ul>
        //         {meetupDetails.map(item => (
        //             <List key={item.id}>
        //                 <h1>{item.title}</h1>
        //             </List>
        //         ))}
        //     </ul> */}
        // </Container>
    );
}
