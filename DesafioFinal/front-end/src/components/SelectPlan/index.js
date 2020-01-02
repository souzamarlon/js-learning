import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Container } from './styles';

import api from '~/services/api';

export default function ReactSelect({
    name,
    label,
    options,
    multiple,
    ...rest
}) {
    const ref = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);

    // const [plan, setPlan] = useState(defaultValue);

    function parseSelectValue(selectRef) {
        const selectValue = selectRef.select.state.value;

        console.tron.log(selectValue);

        return selectValue ? selectValue.id : '';
    }

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: fieldName,
                ref: ref.current,
                path: 'state.value',
                parseValue: parseSelectValue,
                clearValue: selectRef => {
                    selectRef.select.clearValue();
                },
            });
        }
    }, [ref.current, fieldName]); // eslint-disable-line

    // async function getDefaultValue() {
    //     if (!defaultValue) return null;

    //     const defaultPlan = await options.find(
    //         option => option.id === defaultValue
    //     );

    //     setPlan(defaultPlan);

    //     return defaultPlan;
    // }
    // getDefaultValue();

    return (
        <Container>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <AsyncSelect
                name={fieldName}
                cacheOptions
                aria-label={fieldName}
                loadOptions={options}
                defaultValue
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
ReactSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
