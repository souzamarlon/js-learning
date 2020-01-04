import React, { useRef, useEffect, useState, useMemo } from 'react';
import ReactDatePicker, {
    registerLocale,
    setDefaultLocale,
} from 'react-datepicker';

import { format } from 'date-fns';

import { useField } from '@rocketseat/unform';

import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

export default function DatePicker({ name, ...rest }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(defaultValue);

    console.tron.log(defaultValue);

    // useEffect(() => {
    //     const dateFormatted = format(defaultValue, 'dd/MM/YYYY HH:mm', {
    //         locale: pt,
    //     });

    //     setSelected(dateFormatted);
    // }, [defaultValue, selected]);

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
                locale="pt"
                {...rest}
            />
            {error && <span>{error}</span>}
        </>
    );
}
