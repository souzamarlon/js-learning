import React, { useState, useEffect } from 'react';
// import { useField } from '@rocketseat/unform';

// import { Container } from './styles';
import api from '~/services/api';

export default function Detail({ match }) {
    // const [meetup, setMeetup] = useState([]);

    const [meetupID] = useState(match.params.id);

    // useEffect(() => {
    //     async function loadMeetup() {
    //         const response = await api.get(`meetups/${item.id}`);

    //         const data = response.data.map(item => {
    //             return {
    //                 title: item.title,
    //                 date: format(
    //                     parseISO(item.date),
    //                     "d 'de' MMMM', às' HH:mm'h'",
    //                     {
    //                         locale: pt,
    //                     }
    //                 ),
    //             };
    //         });

    //         setMeetup(data);
    //     }
    //     loadMeetup();
    // }, []);

    console.tron.log(meetupID);
    return <h1>Teste</h1>;
}
