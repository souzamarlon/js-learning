import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container, Banner } from './styles';

export default function BannerInput() {
    const { defaultValue, registerField } = useField('image');

    const [file, setFile] = useState(defaultValue && defaultValue.id);

    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        async function previewBanner() {
            const id = defaultValue;
            const response = await api.get(`files/${id}`);

            const [image] = response.data;
            console.tron.log(image.url);
            setPreview(image.url);
        }

        previewBanner();
    }, [defaultValue]);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'image',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref]); // eslint-disable-line

    async function handleChange(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="banner">
                <Banner preview={preview}>
                    <img src={preview} alt="" />
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
