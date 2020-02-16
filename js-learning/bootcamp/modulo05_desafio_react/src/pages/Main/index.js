import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container/index';

import { Form, SubmitButton, List, Error } from './styles';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRepo: '',
            repositories: [],
            loading: false,
            error: null,
            duplicate: false,
        };
    }

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value,
            error: null,
        });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: false, duplicate: false });

        const { newRepo, repositories } = this.state;
        const isEqual = repositories.find(n => n.name === newRepo);

        try {
            if (isEqual) {
                throw new Error('Repositório duplicado');
            }
            if (newRepo === '') throw new Error('Informe um repo!');

            const response = await api.get(`/repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: false,
                error: false,
            });
        } catch (error) {
            this.setState({ error: true, duplicate: !!isEqual });
            // console.log('Repositório duplicado');
            console.log(!!isEqual);
        } finally {
            this.setState({ loading: false, duplicate: !!isEqual });
        }
    };

    render() {
        const { newRepo, repositories, loading, error, duplicate } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>
                <Form onSubmit={this.handleSubmit} error={error}>
                    <input
                        type="text"
                        placeholder="Adicionar repositórios"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>
                {duplicate ? <Error>Repositório duplicado</Error> : null}
                <List>
                    {repositories.map(repository => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
