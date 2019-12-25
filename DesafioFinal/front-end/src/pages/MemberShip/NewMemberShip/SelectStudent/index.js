import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
    const ref = useRef(null);

    const { registerField, error } = useField('student_id');

    function parseSelectValue(selectRef) {
        const selectValue = selectRef.select.state.value;

        // console.tron.log(selectValue);

        return selectValue ? selectValue.id : '';
    }

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'student_id',
                ref: ref.current,
                path: 'state.value',
                parseValue: parseSelectValue,
                clearValue: selectRef => {
                    selectRef.select.clearValue();
                },
            });
        }
    }, [ref]); // eslint-disable-line

    return (
        <Container>
            {label && <label htmlFor="student_id">{label}</label>}

            <AsyncSelect
                name="student_id"
                cacheOptions
                aria-label="student_id"
                loadOptions={options}
                isMulti={false}
                ref={ref}
                getOptionValue={option => option.id}
                getOptionLabel={option => option.name}
                {...rest}
            />

            {error && <span>{error}</span>}
        </Container>
    );
}
