import React, { useState, useEffect, useCallback } from 'react';

import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewStudent() {
    // TODO Criar um validador para mostrar se o email já existe!

    const [student, setStudent] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('students');

            const name = response.data.map(item => ({
                student_id: item.id,
                label: item.name,

                // value: item.name.toLowerCase(),
                // label: item.name.toLowerCase(),
            }));

            setStudent(name);
        }

        listStudents();
    }, []);

    // const filterColors = () => {
    //     return student.filter(i =>
    //         i.label.toLowerCase().includes(inputValue.toLowerCase())
    //     );
    // };
    // const promiseOptions = () =>
    //     new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(filterColors(inputValue));
    //         }, 1000);
    //     });

    const handleInputChange = newValue => {
        setInputValue(newValue);
        return newValue;
    };
    console.tron.log(inputValue);

    async function handleSubmit(data) {
        await api.post('memberships', data);
        // history.push('/');
        // console.tron.log(data);
    }

    console.tron.log(student);

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

                    <AsyncSelect
                        name="student_id"
                        cacheOptions
                        defaultOptions={student}
                        // defaultOptions
                        loadOptions={() => {}}
                        onInputChange={handleInputChange}
                    />

                    {/* <Input name="name" className="name" /> */}
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
