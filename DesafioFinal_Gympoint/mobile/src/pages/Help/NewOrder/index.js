import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Alert, ScrollView } from 'react-native';
import { Container, Form, FormInput, SubmitButton } from './styles';
import api from '~/services/api';

import Header from '~/components/Header';

export default function NewOrder() {
  const [question, setQuestion] = useState('');

  const id = useSelector(state => state.auth.id);
  async function handleSubmit() {
    try {
      const response = await api.post(`students/${id}/help-orders`, {
        question,
      });
      Alert.alert('Sucesso!', 'Pergunta realizada com sucesso!');

      console.tron.log(response.data);
    } catch (err) {
      Alert.alert('Falha!', 'Erro ao tentar enviar sua pergunta!');
      console.tron.log(err);
    }
  }

  console.tron.log(question);

  return (
    <>
      <Header />

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
            value={question}
            onChangeText={setQuestion}
          />
        </Form>
        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </>
  );
}
