import React from 'react';

import { useSelector } from 'react-redux';

import { Alert, ScrollView } from 'react-native';
import { Container, Form, FormInput, SubmitButton } from './styles';
import api from '~/services/api';

import Header from '~/components/Header';

export default function NewOrder() {
  const id = useSelector(state => state.auth.id);
  async function handleAddCheckin() {
    try {
      const response = await api.post(`students/${id}/checkins`);
      Alert.alert('Sucesso!', 'Check-in realizado com sucesso!');

      console.tron.log(response.data);
    } catch (err) {
      Alert.alert('Falha!', 'Você já realizou 5 checkins nos ultimos 7 dias.');
      console.tron.log(err);
    }
  }

  return (
    <>
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Form>
            <FormInput
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Inclua seu pedido de auxílio"
              returnKeyType="next"
              multiline
              // numberOfLines={100}

              // onSubmitEditing={() => emailRef.current.focus()}
              // value={name}
              // onChangeText={setName}
            />
            <SubmitButton onPress={handleAddCheckin}>
              Novo check-in
            </SubmitButton>
          </Form>
        </Container>
      </ScrollView>
    </>
  );
}
