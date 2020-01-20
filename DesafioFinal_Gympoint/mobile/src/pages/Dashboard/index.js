import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';

// import { Container } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const id = useSelector(state => state.auth.id);

  console.tron.log(id);

  // async function loadCheckins() {
  //   const response = await api.get(`/students/${id}/checkins`);
  // }

  return <Background />;
}
