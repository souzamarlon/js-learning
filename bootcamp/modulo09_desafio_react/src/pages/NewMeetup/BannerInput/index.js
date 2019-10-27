import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container, Banner } from './styles';

export default function AvatarInput() {
    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'image',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref]); // eslint-disable-line

    // [ref, registerField])

    async function handleChange(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        const response = await api.post('files', data);

        const { id } = response.data;

        setFile(id);
    }
    return (
        <Container>
            <label htmlFor="banner">
                <Banner>
                    <MdCameraAlt size={54} />
                    <h1>Selecionar imagem</h1>
                </Banner>

                <input
                    type="file"
                    id="banner"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
}
