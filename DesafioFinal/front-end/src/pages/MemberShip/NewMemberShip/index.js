import React, { useState, useEffect } from 'react';
import { addMonths, parseISO, isBefore } from 'date-fns';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import SelectStudent from './SelectStudent';
import SelectPlan from './SelectPlan';
import DatePicker from './DatePicker';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewMemberShip() {
    const [startDate, setStartDate] = useState({});
    const [plans, setPlans] = useState([]);

    //
    // Loading the plans in SelectStudent
    //
    const searchStudent = inputValue => {
        async function listStudents() {
            const response = await api.get(`students`, {
                params: { q: inputValue },
            });

            return response.data;
        }

        return listStudents();
    };

    const loadStudents = inputValue =>
        new Promise(callback => {
            setTimeout(() => {
                callback(searchStudent(inputValue));
            }, 100);
        });

    //
    // Loading the plans in SelectPlan
    //
    const searchPlan = () => {
        async function listPlans() {
            const response = await api.get('plans');

            setPlans(response.data);

            return response.data;
        }

        return listPlans();
    };

    const loadPlans = inputValue =>
        new Promise(callback => {
            setTimeout(() => {
                callback(searchPlan(inputValue));
            }, 100);
        });

    async function handleSubmit(data) {
        try {
            await api.post('memberships', data);

            toast.success('Sucesso ao criar o cadastro!');
            // history.push('/');
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            // console.log(data);
        }
        // history.push('/');
    }

    async function calcDate(date, plan_id) {
        setStartDate({
            ...startDate,
            start_date: date,
            // end_date: plan_id,
            // end_date: addMonths(parseISO(date), planExist.duration),
        });

        // const end_date = ;
    }
    console.tron.log(plans);

    return (
        <>
            <Form initialData={startDate} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Cadastro de matrícula</h1>
                    </Title>
                    <Button>
                        <div>
                            <Link to="/membership">
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

                    <SelectStudent
                        name="student_id"
                        // cacheOptions
                        defaultOptions
                        options={loadStudents}
                    />

                    <Table>
                        <h1>PLANO</h1>
                        <h1>DATA DE INÍCIO</h1>
                        <h1>DATA DE TÉRMINO</h1>
                        <h1>VALOR FINAL</h1>

                        {/* <Input name="plan_id" className="plano" /> */}
                        <SelectPlan
                            name="plan_id"
                            // cacheOptions
                            defaultOptions
                            className="plano"
                            options={loadPlans}
                            onChange={calcDate}
                        />
                        {/* <Input name="start_date" className="start_date" /> */}

                        <DatePicker
                            name="start_date"
                            className="start_date"
                            selected={startDate.start_date}
                            onChange={calcDate}

                            // onClick={start_date => calcPlan(start_date)}
                        />
                        <Input name="end_date" disabled className="end_date" />

                        <Input
                            name="final_price"
                            disabled
                            className="final_price"
                        />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
