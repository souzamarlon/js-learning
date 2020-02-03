import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import Checkin from '~/components/Checkin';
import Header from '~/components/Header';

import { Container, SubmitButton, List } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [checkin, setCheckin] = useState();
  const [refreshList, setRefreshList] = useState(false);
  // const [refreshList, setRefreshList] = useState([{ state: false }]);

  const id = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`/students/${id}/checkins`);

      const checkins = response.data.map(item => ({
        ...item,
        index: response.data.indexOf(item) + 1,
      }));

      setCheckin(checkins.sort((a, b) => a.createdAt < b.createdAt));
      console.tron.log(checkins);
      // setCheckin(checkins);
      setRefreshList(false);
    }
    loadCheckins();
  }, [id, refreshList]);

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

  async function loadPage() {
    setRefreshList(true);
  }

  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={handleAddCheckin}>Novo check-in</SubmitButton>
        <List
          refreshing={refreshList}
          onRefresh={loadPage}
          data={checkin}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </>
  );
}
Dashboard.navigationOptions = {
  tabBarLabel: 'Check-ins',
};
