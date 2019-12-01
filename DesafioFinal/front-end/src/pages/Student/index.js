import React from 'react';

// import { Container } from './styles';

import api from '~/services/api';

export default function Student() {
    async function listStudents() {
        const response = await api.get('students');
        console.tron.log(response.data);
    }

    listStudents();

    return <div />;
}
