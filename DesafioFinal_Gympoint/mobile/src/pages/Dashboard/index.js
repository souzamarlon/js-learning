import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Checkin from '~/components/Checkin';

import { Container, SubmitButton, List } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [checkin, setCheckin] = useState();
  const id = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`/students/${id}/checkins`);

      const checkins = response.data.map(item => ({
        ...item,
        index: response.data.indexOf(item) + 1,
      }));

      // console.tron.log(checkins);
      setCheckin(checkins);
    }
    loadCheckins();
  }, [id]);

  return (
    <Container>
      <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>
      <List
        data={checkin}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Checkin onCancel={() => {}} data={item} />}
      />
    </Container>
  );
}
