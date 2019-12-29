import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
    const ref = useRef(null);

    const { registerField, defaultValue, error } = useField('plan_id');

    function parseSelectValue(selectRef) {
        const selectValue = selectRef.select.state.value;

        console.tron.log(selectValue);

        return selectValue ? selectValue.id : '';
    }

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'plan_id',
                ref: ref.current,
                path: 'state.value',
                parseValue: parseSelectValue,
                clearValue: selectRef => {
                    selectRef.select.clearValue();
                },
            });
        }
    }, [ref]); // eslint-disable-line

    function getDefaultValue() {
        if (!defaultValue) return null;

        // eslint-disable-next-line react/prop-types
        return options.find(option => option.id === defaultValue);
    }

    return (
        <Container>
            {label && <label htmlFor="plan_id">{label}</label>}

            <AsyncSelect
                name="student_id"
                cacheOptions
                aria-label="plan_id"
                loadOptions={options}
                defaultValue={getDefaultValue()}
                isMulti={false}
                ref={ref}
                getOptionValue={option => option.id}
                getOptionLabel={option => option.title}
                {...rest}
            />

            {error && <span>{error}</span>}
        </Container>
    );
}
