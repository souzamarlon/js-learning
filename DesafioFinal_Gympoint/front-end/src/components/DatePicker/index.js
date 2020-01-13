import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'props.selected',
            clearValue: pickerRef => {
                pickerRef.clear();
            },
        });
    }, [ref.current, fieldName]); // eslint-disable-line

    return (
        <>
            <ReactDatePicker
                name={fieldName}
                selected={selected}
                onChange={date => setSelected(date)}
                ref={ref}
                locale="pt-BR"
                showTimeSelect
                // timeFormat="p"
                timeIntervals={15}
                // dateFormat="Pp"
                placeholderText="Select the plan before choose the date..."
                {...rest}
            />
            {error && <span>{error}</span>}
        </>
    );
}
