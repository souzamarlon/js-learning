import React, { useRef, useState, useEffect, useCallback } from 'react';

// import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import SelectAsync from './SelectAsync';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewMemberShip() {
    const [student, setStudent] = useState([]);

    const searchTool = inputValue => {
        async function listStudents() {
            const response = await api.get(`students`, {
                params: { q: inputValue },
            });

            return response.data;
            // setStudent(response.data);
        }

        return listStudents();
    };
    // -- Testing another way
    const loadOptions = inputValue =>
        new Promise(callback => {
            setTimeout(() => {
                callback(searchTool(inputValue));
            }, 100);
        });

    // --Its working:
    // const promiseOptions = inputValue =>
    //     new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(searchTool(inputValue));
    //         }, 100);
    //     });

    async function handleSubmit(data, id) {
        await api.post('memberships', data);

        // history.push('/');
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de matrícula</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/">
                                <button type="button" onClick={() => {}}>
                                    <strong>VOLTAR</strong>
                                </button>
                            </Link>
                        </div>

                        <button type="submit" className="submit">
                            <strong>SALVAR</strong>
                        </button>
                    </Button>
                </Container>
                <Content>
                    <p>ALUNO</p>

                    {/* -- Trying another away */}
                    <AsyncSelect
                        name="student_id"
                        cacheOptions
                        defaultOptions
                        // aria-label={option => option.name}
                        loadOptions={loadOptions}
                        // isMulti={multiple}
                        // ref={ref}
                        getOptionValue={option => option.id}
                        getOptionLabel={option => option.name}
                    />

                    {/* -- Its working: */}

                    {/* <SelectAsync
                        name="student_id"
                        // cacheOptions
                        defaultOptions
                        options={promiseOptions}
                    /> */}

                    <Table>
                        <h1>PLANO</h1>
                        <h1>DATA DE INÍCIO</h1>
                        <h1>DATA DE TÉRMINO</h1>
                        <h1>VALOR FINAL</h1>

                        <Input name="plan_id" className="plano" />
                        <Input name="start_date" className="start_date" />
                        <Input name="end_date" className="end_date" />
                        <Input name="final_price" className="final_price" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
