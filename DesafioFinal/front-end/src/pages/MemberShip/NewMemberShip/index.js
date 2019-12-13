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
    const [inputValue, setInputValue] = useState(['']);

    useEffect(() => {
        async function listStudents() {
            const response = await api.get('students');

            const name = response.data.map(item => ({
                name: item.name,
                student_id: item.id,
                label: item.name,

                // value: item.name.toLowerCase(),
                // label: item.name.toLowerCase(),
            }));
            setStudent(response.data);
            setInputValue(name);
        }

        listStudents();
    }, []);

    const searchTool = () => {
        return student.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    const promiseOptions = () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(searchTool(inputValue));
            }, 1000);
        });

    async function handleSubmit(data, student_id) {
        const { plan_id } = data;
        await api.post('memberships', student_id, plan_id);
        // history.push('/');
        // console.tron.log(student_id);
    }

    console.tron.log(inputValue);

    // const searchStudents = useCallback(({ search }) => {
    //     async function searchTool() {
    //         const response = await api.get(`students?q=${search}`);

    //         const name = response.data.map(item => ({
    //             name: item.name,
    //             student_id: item.id,
    //             label: item.name,

    //             // value: item.name.toLowerCase(),
    //             // label: item.name.toLowerCase(),
    //         }));

    //         // console.tron.log(response.data);

    //         setInputValue(response.data);
    //     }
    //     searchTool();
    // }, []);

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
                        cacheOptions
                        defaultOptions
                        // defaultOptions
                        loadOptions={() => promiseOptions(inputValue)}
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
