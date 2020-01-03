import React, { useState, useEffect } from 'react';
import { addMonths, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { formatPrice } from '~/util/format';

import SelectPlan from '../../../components/SelectPlan';
import DatePicker from '../../../components/DatePicker';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Title, Button, Content, Table } from './styles';

export default function EditMemberShip({ match }) {
    const [membership, setMembership] = useState([]);
    const [plans, setPlans] = useState([]);

    const [student_id] = useState(match.params.id);

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get('memberships');

            const [dataDetails] = response.data.filter(item => {
                return item.student.id == student_id;
            });

            setMembership({
                ...dataDetails,
                start_date: parseISO(dataDetails.start_date),
                end_date: format(
                    parseISO(dataDetails.end_date),
                    "d 'de' MMMM 'de' yyyy",
                    {
                        locale: pt,
                    }
                ),
                price: formatPrice(dataDetails.price),
            });
        }

        loadDetails();
    }, [student_id]);

    // Loading the plans in SelectPlan:
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

    function definePlan(plan_id) {
        setMembership({ ...membership, plan: plan_id });
    }

    async function showDateAndValue(date) {
        setMembership({
            ...membership,
            start_date: date,
            end_date: format(
                addMonths(date, membership.plan.duration),
                "d 'de' MMMM 'de' yyyy",
                {
                    locale: pt,
                }
            ),
            price: formatPrice(
                membership.plan.price * membership.plan.duration
            ),
        });
    }

    async function handleSubmit(data) {
        try {
            const response = await api.put(`memberships/${student_id}`, data);

            toast.success('Sucesso ao criar o cadastro!');
            history.push('/membership');

            console.tron.log(response.data);
        } catch (err) {
            toast.error('Erro ao criar o cadastro!');
            console.tron.log(err);
        }
    }

    return (
        <>
            <Form initialData={membership} onSubmit={handleSubmit}>
                <Container>
                    <Title>
                        <h1>Edição de matrícula</h1>
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

                    <Input name="student.name" className="name" disabled />

                    <Table>
                        <h1>PLANO</h1>
                        <h1>DATA DE INÍCIO</h1>
                        <h1>DATA DE TÉRMINO</h1>
                        <h1>VALOR FINAL</h1>

                        <SelectPlan
                            name="plan_id"
                            cacheOptions
                            defaultOptions
                            value={plans.find(
                                ({ id }) => id === membership.plan.id
                            )}
                            className="plano"
                            options={loadPlans}
                            onChange={definePlan}
                        />

                        <DatePicker
                            name="start_date"
                            className="start_date"
                            selected={membership.start_date}
                            onChange={showDateAndValue}
                            disabled={membership.plan ? false : true} // eslint-disable-line
                        />
                        <Input name="end_date" disabled className="end_date" />

                        <Input name="price" disabled className="price" />
                    </Table>
                </Content>
            </Form>
        </>
    );
}
