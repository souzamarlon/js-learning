import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import HelpList from '~/components/HelpList';

import Header from '~/components/Header';

import { Container, SubmitButton, List } from './styles';

import api from '~/services/api';

export default function Help() {
  const id = useSelector(state => state.auth.id);
  const [question, setQuestion] = useState();

  const [refreshList, setRefreshList] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get(`/students/${id}/help-orders`);

      const questions = response.data.map(item => ({
        ...item,
      }));

      setQuestion(questions.sort((a, b) => a.createdAt < b.createdAt));

      setRefreshList(false);
    }
    loadQuestions();
  }, [id, refreshList]);

  async function loadPage() {
    setRefreshList(true);
  }

  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo pedido de auxílio</SubmitButton>

        <List
          refreshing={refreshList}
          onRefresh={loadPage}
          data={question}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <HelpList onCancel={() => {}} data={item} />
          )}
        />
      </Container>
    </>
  );
}
