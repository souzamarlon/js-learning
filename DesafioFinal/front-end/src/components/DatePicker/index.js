import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, {
    registerLocale,
    setDefaultLocale,
} from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import pt from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(defaultValue);
    setDefaultLocale('pt', pt);

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
