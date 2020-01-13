import React, { useState } from 'react';
import { addMonths, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { zonedTimeToUtc } from 'date-fns-tz';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { formatPrice } from '~/util/format';

import SelectStudent from '../../../components/SelectStudent';
import SelectPlan from '../../../components/SelectPlan';
import DatePicker from '../../../components/DatePicker';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function NewMemberShip() {
    const [membership, setMembership] = useState({});
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

    async function showDateAndValue(date) {
        // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const dateTimeUTC = zonedTimeToUtc(date, 'America/Brasília');

        setMembership({
            ...membership,
            start_date: dateTimeUTC,
            end_date: format(
                addMonths(dateTimeUTC, plans.duration),
                "d 'de' MMMM 'de' yyyy'T'HH:mm:ss",
                {
                    locale: pt,
                }
            ),
            final_price: formatPrice(plans.price * plans.duration),
        });

        // console.tron.log(dateTimeUTC);
    }

    async function definePlan(plan_id) {
        setPlans(plan_id);
    }

    async function handleSubmit(data) {
        try {
            const response = await api.post('memberships', data);

            toast.success('Sucesso ao criar o cadastro!');
            history.push('/membership');

            console.tron.log(response.data);
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            console.tron.log(err);
            console.tron.log(data);
        }
    }
    console.tron.log(membership);
    return (
        <>
            <Form initialData={membership} onSubmit={handleSubmit}>
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

                        <SelectPlan
                            name="plan_id"
                            // cacheOptions
                            defaultOptions
                            className="plano"
                            options={loadPlans}
                            onChange={definePlan}
                        />

                        <DatePicker
                            name="start_date"
                            className="start_date"
                            selected={membership.start_date}
                            onChange={showDateAndValue}
                            disabled={plans.id ? false : true} // eslint-disable-line
                            locale="pt"
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
