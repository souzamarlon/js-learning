import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
// import { Alert, TouchableOpacity } from 'react-native';
// import { withNavigationFocus } from 'react-navigation';

import HelpList from '~/components/HelpList';

import Header from '~/components/Header';

import { Container, SubmitButton, List } from './styles';

import api from '~/services/api';

// eslint-disable-next-line react/prop-types
export default function Help({ navigation }) {
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
    <Container>
      <Header />
      <SubmitButton
        onPress={() => {
          navigation.navigate('NewOrder');
        }}
      >
        Novo pedido de auxílio
      </SubmitButton>

      <List
        data={question}
        refreshing={refreshList}
        onRefresh={loadPage}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: data }) => (
          <HelpList
            data={data}
            onPress={() => {
              navigation.navigate('AnswerOrder', { data });
            }}
          />
        )}
      />
    </Container>
  );
}
